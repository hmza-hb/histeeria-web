"use client";

import { useEffect, useRef, useCallback } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

const ASCII_CHARS = " .:-=+*#%@";

export function AsciiScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    window.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement?.getBoundingClientRect();
      const w = rect?.width || canvas.offsetWidth;
      const h = rect?.height || canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    resize();
    window.addEventListener("resize", resize);

    // Generateur de Torus Knot (noeud torique)
    const generateTorusKnot = (
      p: number,
      q: number,
      segments: number,
      tubeSegments: number
    ): Point3D[] => {
      const points: Point3D[] = [];
      for (let i = 0; i < segments; i++) {
        for (let j = 0; j < tubeSegments; j++) {
          const u = (i / segments) * Math.PI * 2;
          const v = (j / tubeSegments) * Math.PI * 2;

          const r = 2 + Math.cos(q * u);
          const x = r * Math.cos(p * u);
          const y = r * Math.sin(p * u);
          const z = -Math.sin(q * u);

          const tubeRadius = 0.4;
          const nx = Math.cos(p * u) * Math.cos(v);
          const ny = Math.sin(p * u) * Math.cos(v);
          const nz = Math.sin(v);

          points.push({
            x: x + tubeRadius * nx,
            y: y + tubeRadius * ny,
            z: z + tubeRadius * nz,
          });
        }
      }
      return points;
    };

    const torusKnot = generateTorusKnot(2, 3, 128, 16);

    // Rotation 3D
    const rotatePoint = (
      point: Point3D,
      angleX: number,
      angleY: number,
      angleZ: number
    ): Point3D => {
      let { x, y, z } = point;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const newY = y * cosX - z * sinX;
      const newZ = y * sinX + z * cosX;
      y = newY;
      z = newZ;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const newX = x * cosY + z * sinY;
      z = -x * sinY + z * cosY;
      x = newX;

      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);
      const finalX = x * cosZ - y * sinZ;
      const finalY = x * sinZ + y * cosZ;

      return { x: finalX, y: finalY, z };
    };

    // Projection perspective
    const project = (
      point: Point3D,
      centerX: number,
      centerY: number,
      scale: number
    ): { x: number; y: number; z: number } => {
      const perspective = 5;
      const factor = perspective / (perspective + point.z);
      return {
        x: centerX + point.x * scale * factor,
        y: centerY + point.y * scale * factor,
        z: point.z,
      };
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width || canvas.offsetWidth;
      const height = rect.height || canvas.offsetHeight;

      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const scale = Math.min(width, height) * 0.32;

      // Fond transparent (section a son propre bg)
      ctx.clearRect(0, 0, width, height);
      const mouseInfluenceX = (mouseRef.current.x - 0.5) * 0.5;
      const mouseInfluenceY = (mouseRef.current.y - 0.5) * 0.5;

      const time = timeRef.current;
      const angleX = time * 0.3 + mouseInfluenceY;
      const angleY = time * 0.5 + mouseInfluenceX;
      const angleZ = time * 0.2;

      // Projeter et trier les points par profondeur
      const projectedPoints = torusKnot
        .map((point) => {
          const rotated = rotatePoint(point, angleX, angleY, angleZ);
          return project(rotated, centerX, centerY, scale);
        })
        .sort((a, b) => a.z - b.z);

      // Rendu ASCII
      const charSize = Math.max(14, Math.min(width, height) * 0.03);
      ctx.font = `${charSize}px "Geist Mono", monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      projectedPoints.forEach((point) => {
        const normalizedZ = (point.z + 3) / 6;
        const charIndex = Math.floor(normalizedZ * (ASCII_CHARS.length - 1));
        const char =
          ASCII_CHARS[Math.max(0, Math.min(ASCII_CHARS.length - 1, charIndex))];

        const brightness = 0.2 + normalizedZ * 0.8;
        const green = Math.floor(180 + normalizedZ * 75);
        ctx.fillStyle = `rgba(${Math.floor(green * 0.6)}, ${green}, ${Math.floor(green * 0.7)}, ${brightness})`;
        ctx.fillText(char, point.x, point.y);
      });

      // Particules flottantes
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const px = (Math.sin(time * 0.5 + i * 0.5) * 0.3 + 0.5) * width;
        const py = (Math.cos(time * 0.3 + i * 0.7) * 0.3 + 0.5) * height;
        const pz = Math.sin(time + i) * 0.5 + 0.5;

        ctx.fillStyle = `rgba(100, 200, 150, ${pz * 0.3})`;
        ctx.fillText(
          ASCII_CHARS[Math.floor(pz * (ASCII_CHARS.length - 1))],
          px,
          py
        );
      }

      timeRef.current += 0.008;
      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ display: "block" }}
    />
  );
}

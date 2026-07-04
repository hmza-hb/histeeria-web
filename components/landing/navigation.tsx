"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Platform", href: "/platform" },
  { name: "Docs", href: "/docs" },
  { name: "Blog", href: "/blog" },
  { name: "Changelog", href: "/changelog" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-4 left-4 right-4" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group shrink-0">
            <img 
              src="/assets/logo-dark.png" 
              alt="Histeeria Logo" 
              className={`object-contain transition-all duration-500 ${
                isScrolled 
                  ? "w-8 h-8" 
                  : "w-10 h-10"
              }`} 
            />
            <div className="flex flex-col">
              <span className={`font-display font-bold tracking-tight transition-all duration-500 leading-none ${isScrolled ? "text-base text-white" : "text-lg text-white"}`}>HISTEERIA</span>
             
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <Button
              asChild
              size="sm"
              className={`rounded-full transition-all duration-500 font-semibold cursor-pointer ${
                isScrolled 
                  ? "bg-white text-black hover:bg-white/90 px-5 h-9 text-xs" 
                  : "bg-white text-black hover:bg-white/90 px-6 h-10 text-sm"
              }`}
            >
              <a href="/get-started">
                Get started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-colors duration-500 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-6 pt-24 pb-8 overflow-y-auto">
          {/* Mobile Close Button in Sidebar top right */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col gap-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-white/10 pb-4 text-3xl font-display text-white transition-colors hover:text-white/70"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="pt-6 border-t border-white/10 mt-auto">
            <Button 
              asChild
              className="w-full bg-white text-black hover:bg-white/90 rounded-full h-14 text-base cursor-pointer font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="/get-started">
                Get started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
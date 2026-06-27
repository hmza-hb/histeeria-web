import { NextResponse } from "next/server";

const DEFAULT_API_URL = "https://api.histeeria.com";

export async function GET() {
  const apiUrl =
    process.env.API_URL ??
    process.env.NEXT_PUBLIC_API_URL ??
    DEFAULT_API_URL;

  try {
    const res = await fetch(`${apiUrl}/v1/public/stats`, {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch public stats" },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=10, stale-while-revalidate=30",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch public stats" },
      { status: 502 }
    );
  }
}

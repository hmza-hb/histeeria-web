import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, buildDetails } = body;

    // Basic server-side validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!name || name.trim() === "") {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    // Log the waitlist signup for the server logs
    console.log("Memory Systems Waitlist Signup:", {
      name,
      email,
      role,
      buildDetails,
      timestamp: new Date().toISOString(),
    });

    // Simulate database write delay to showcase premium frontend animations
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return NextResponse.json(
      { success: true, message: "Welcome to the future of machine memory." },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

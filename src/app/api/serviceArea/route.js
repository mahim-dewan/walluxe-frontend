import { NextResponse } from "next/server";

// Proxy API
export async function GET() {
  try {
    const res = await fetch(`${process.env.BASE_API}/serviceAreas`, {
      next: { revalidate: 86400 }, // Revalidate time is 24h
    });
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    // Server is OFF/ Down / Network error / CORS issue
    if (err instanceof TypeError && err.message.includes("fetch")) {
      return NextResponse.json({
        success: false,
        message: "Server is unreachable. Please try again later.",
      });
    }
  }
}

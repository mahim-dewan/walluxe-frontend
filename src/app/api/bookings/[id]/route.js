import { NextResponse } from "next/server";

// Get a single booking
export async function GET(req, { params }) {
  try {
    const { id } = params;

    const res = await fetch(`${process.env.BASE_API}/bookings/${id}`);
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

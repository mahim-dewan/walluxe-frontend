import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const res = await axios.post(`${process.env.BASE_API}/payments/init`, body);
    return NextResponse.json(res.data);
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

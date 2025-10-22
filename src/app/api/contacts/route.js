import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const res = await axios.post(`${process.env.BASE_API}/contacts`, body);

    return NextResponse.json(res.data);
  } catch (err) {
    // 400, 404, 500
    if (err.response) {
      return NextResponse.json(err.response.data);
    }
    // Request failed/ server off/down
    else if (err.request) {
      return NextResponse.json({
        success: false,
        message: "Server is unreachable. Please try again later.",
      });
    }
  }
}

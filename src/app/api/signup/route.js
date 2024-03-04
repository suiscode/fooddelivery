import { NextResponse } from "next/server";
import { connectToDb } from "../utils";

export const POST = async (req, res) => {
  const body = await req.json()
  try {
    connectToDb();
    console.log(body);
    return NextResponse.json("hi", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(error, { status: 500 });
  }
};

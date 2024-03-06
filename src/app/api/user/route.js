import { NextResponse } from "next/server";
import { connectToDb } from "../utils";
import { User } from "@/app/api/models";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const GET = async (req, res) => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("cookie").value;
    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    connectToDb();
    const user = await User.findById(id);
    return NextResponse.json({data:user}, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

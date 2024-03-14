import { NextResponse } from "next/server";
import { User } from "@/app/api/models";
import { connectToDb } from "@/app/api/utils";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const PUT = async (req, res) => {
  const body = await req.json();
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("cookie").value;
    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    connectToDb();

    const updatedUser = await User.findByIdAndUpdate(id, {
      imageUrl: body.publicID,
    });

    return NextResponse.json("hello", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

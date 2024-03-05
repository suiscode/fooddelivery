import { NextResponse } from "next/server";
import { connectToDb, generateToken } from "../utils";
import { User } from "@/app/api/models";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export const POST = async (req, res) => {
  const body = await req.json();
  connectToDb();

  try {
    const user = await User.find({ email: body.email });
    console.log(user[0], "zazaza");
    if (
      user.length == 0 ||
      !(await bcrypt.compare(body.password, user[0].password))
    ) {
      return NextResponse.json("Credentials wrong", { status: 400 });
    }
    cookies().set("cookie", generateToken(user[0]._id));
    return NextResponse.json("Signed in", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

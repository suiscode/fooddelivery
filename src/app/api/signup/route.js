import { NextResponse } from "next/server";
import { connectToDb } from "../utils";
import { User } from "@/app/api/models";
import bcrypt from "bcrypt";
import { log } from "console";

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    connectToDb();
    const user = await User.find({ email: body.email });
    if (user.length == 0) {
      const hashedPassword = await bcrypt.hash(body.password, 10);
      const newUser = await User.create({
        name: body.name,
        email: body.email,
        location: body.location,
        phoneNumber: +976,
        password: hashedPassword,
      });
      return NextResponse.json("User created", { status: 200 });
    }
    return NextResponse.json("Email already exists", { status: 400 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

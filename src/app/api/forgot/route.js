import { NextResponse } from "next/server";
import { connectToDb } from "../utils";
import { User } from "@/app/api/models";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

const email = process.env.GMAIL;
const pass = process.env.GMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

const randomNumber = Math.floor(Math.random() * 900000) + 100000;

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    connectToDb();
    const user = await User.find({ email: body.email });
    if (user.length >= 1) {
      const info = await transporter.sendMail({
        from: email, // sender address
        to: body.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: `Reset code ${randomNumber}`, // plain text body
        html: `<b>${randomNumber}Hello world?</b>`, // html body
      });
      console.log("Message sent: %s", info.messageId);
      return NextResponse.json(randomNumber, { status: 200 });
    }
    return NextResponse.json("Email does not exists", { status: 400 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const PUT = async (req, res) => {
  const body = await req.json();

  try {
    console.log(body);
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const filter = { email: body.email };
    const update = { password:  hashedPassword};
    const user = await User.findOneAndUpdate(filter, update, {
      new: true
    });

    return NextResponse.json(randomNumber, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

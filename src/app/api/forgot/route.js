import { NextResponse } from "next/server";
import { connectToDb } from "../utils";
import { User } from "@/app/api/models";
import bcrypt from "bcrypt";
import { log } from "console";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "anya77@ethereal.email",
    pass: "UagsD6sZmkE4Zq7XBK",
  },
});

const randomNumber = Math.floor(Math.random() * 900000) + 100000;

export const POST = async (req, res) => {
  const body = await req.json();
  console.log(body.email);
  try {
    connectToDb();
    const user = await User.find({ email: body.email });
    if (user.length >= 1) {
      const info = await transporter.sendMail({
        from: '"Test email" <anya77@ethereal.email>', // sender address
        to: 'tuuduu00@gmail.com', // list of receivers
        subject: "Hello ✔", // Subject line
        text: `Reset code ${randomNumber}`, // plain text body
        html: "<b>Hello world?</b>", // html body
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

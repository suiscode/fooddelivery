import { NextResponse } from "next/server";
import { connectToDb, generateToken } from "../utils";
import { User } from "@/app/api/models";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "deifnil5n",
  api_key: "534983861781594",
  api_secret: "6qzroYr2gOFRNtgQt-tSNERmsH4",
});

export const POST = async (req, res) => {
    console.log(req);
  connectToDb();

  try {
    return NextResponse.json("Signed in", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

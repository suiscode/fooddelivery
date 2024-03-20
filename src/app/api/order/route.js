import { NextResponse } from "next/server";
import { Order } from "../models";
import { connectToDb } from "../utils";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    connectToDb();
    const cookieStore = cookies();
    const token = cookieStore.get("cookie").value;
    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const newOrder = await Order.create({
      totalPrice: body.totalPrice,
      foods: body.items,
      phoneNumber: body.phoneNumber,
      location: body.search,
      userId: id,
    });
    return NextResponse.json(newOrder, { status: 200 });
    // return NextResponse.json('hi', { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const GET = async (req, res) => {
  try {
    connectToDb();
    const cookieStore = cookies();
    const token = cookieStore.get("cookie").value;
    const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const order = await Order.find({ userId: id });
    return NextResponse.json(order, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

import { NextResponse } from "next/server";
import { Category } from "../models";
import { connectToDb } from "../utils";

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    connectToDb();
    const categoryFind = await Category.find({ name: body.name });
    if (categoryFind.length >= 1)
      return NextResponse.json("Category exists", { status: 200 });
    const newCategory = await Category.create({ name: body.name, foodID: [] });
    return NextResponse.json(newCategory, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const GET = async (req, res) => {
  try {
    connectToDb();
    const categoryFind = await Category.find();
    return NextResponse.json(categoryFind, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const PUT = async (req, res) => {
  const body = await req.json();
  try {
    connectToDb();
    const categoryFind = await Category.findByIdAndDelete(body.id);
    return NextResponse.json('Deleted', { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

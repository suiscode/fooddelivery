import { NextResponse } from "next/server";
import { Category, Food } from "../models";
import { connectToDb } from "../utils";
import mongoose from "mongoose";

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    connectToDb();
    console.log(body);
    const foodfind = await Food.find({ foodName: body.foodName });
    console.log(body.foodName);
    if (foodfind.length >= 1) {
      return NextResponse.json("Food exists", { status: 400 });
    }

    const newFood = await Food.create({
      foodName: body.foodName,
      foodRecipe: body.foodRecipe,
      foodPrice: body.foodPrice,
      foodOnSale: body.foodOnSale,
      foodSalePrice: body.foodSalePrice,
      foodImage: body.foodImage,
    });

    const addFoodid = await Category.findByIdAndUpdate(
      body.foodCategory,
      { $push: { foodId: newFood._id.valueOf() } },
      { new: true }
    );

    console.log(foodfind.length, "hoof");
    return NextResponse.json("hello", { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
};

export const GET = async (req, res) => {
  try {
    let foodfind;

    const categoryName = req.nextUrl.searchParams.get("category");
    const amount = req.nextUrl.searchParams.get("amount");
    const onSale = req.nextUrl.searchParams.get("sale");
    if (onSale) {
      foodfind = await Food.find({ foodOnSale: true }).limit(amount);
      console.log(foodfind, " OLSIISHU HAHAHA");
      return NextResponse.json(foodfind, { status: 200 });
    }

    const { foodId } = await Category.findOne({ name: categoryName });
    if (amount) {
      foodfind = await Food.find({ _id: { $in: foodId } }).limit(amount);
    } else {
      foodfind = await Food.find({ _id: { $in: foodId } });
    }
    return NextResponse.json(foodfind, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};

export const PUT = async (req, res) => {
  const { items } = await req.json();

  try {
    console.log(items);
    return NextResponse.json("hi", { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};

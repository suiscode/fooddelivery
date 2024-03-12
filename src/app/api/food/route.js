import { NextResponse } from "next/server";
import { Category, Food } from "../models";
import { connectToDb } from "../utils";

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
    const foodfind = await Food.find();
    return NextResponse.json(foodfind, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};

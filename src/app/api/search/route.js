import { NextResponse } from "next/server";
import { Food } from "../models";
import { connectToDb } from "../utils";
import mongoose from "mongoose";

export const GET = async (req, res) => {
  try {
    connectToDb();
    let foodfind;
    const url = new URL(req.nextUrl);
    console.log(url.searchParams);

    const query = req.nextUrl.searchParams.get("query");
    console.log(query, "search");
    if (query !== undefined) {
        console.log(query, 'query in IF');
      console.log("this worked");
      const filter = {
        $or: [
          {
            foodName: {
              $regex: query,
              $options: "i",
            },
          },
          {
            foodPrice: {
              $regex: query,
            },
          },
        ],
      };
      foodfind = await Food.find(filter);
      return NextResponse.json(foodfind, { status: 200 });
    }
    foodfind = await Food.find();
    return NextResponse.json(foodfind, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};

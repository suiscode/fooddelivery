import { NextResponse } from "next/server";
import { Food } from "../models";
import { connectToDb } from "../utils";
import mongoose from "mongoose";

export const GET = async (req, res) => {
  try {
    connectToDb();

    const url = new URL(req.nextUrl);
    console.log(url.searchParams);

    const query = req.nextUrl.searchParams.get("query");
    console.log(query, "queryqueryquery");
    console.log(query === "undefined");
    if (query !== "undefined") {
      console.log(query, "THIS WORKED WHICH MEANS IS NOT undefined");
      const filter = {
        $or: [
          {
            foodPrice: {
              $regex: query,
            },
          },
          {
            foodName: {
              $regex: query,
              $options: "i",
            },
          },
        ],
      };

     const foodfind = await Food.find(filter);

      return NextResponse.json(foodfind, { status: 200 });
    }
    foodfind = await Food.find();
    return NextResponse.json(foodfind, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
};

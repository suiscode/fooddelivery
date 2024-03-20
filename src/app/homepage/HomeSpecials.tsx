import React, { useEffect, useState } from "react";
import HomeBar from "./HomeBar";
import { Stack } from "@mui/material";
import axios from "axios";
import OnsaleBar from "./OnsaleBar";
import { useGlobalContext } from "../context/Context";
import AddToCart from "../components/AddToCart";
import { fetchAllCategoryWithFood, fetchCategory } from "../utils";

async function HomeSpecials() {
  interface Category {
    _id: string;
    name: string;
    foodId: [string];
  }

  const category: any = await fetchAllCategoryWithFood();

  return (
    <Stack sx={{ width: "100%", paddingInline: "120px" }} spacing={10}>
      <OnsaleBar />
      {category.map((item: Category) => (
        <HomeBar key={item._id} item={JSON.parse(JSON.stringify(item))} />
      ))}
    </Stack>
  );
}

export default HomeSpecials;

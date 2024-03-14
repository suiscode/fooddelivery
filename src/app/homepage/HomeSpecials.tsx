"use client";
import React, { useEffect, useState } from "react";
import HomeBar from "./HomeBar";
import { Stack } from "@mui/material";
import axios from "axios";
import OnsaleBar from "./OnsaleBar";
import { useGlobalContext } from "../context/Context";
import AddToCart from "../components/AddToCart";

function HomeSpecials() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const res = await axios.get("/api/category");
    setCategory(res.data);
  };

  interface Food {
    _id: string;
    name: string;
    foodId: [string];
  }


  return (
    <Stack sx={{ width: "100%", paddingInline: "120px" }} spacing={10}>
      <OnsaleBar />
      {category.map((item: Food) => (
        <HomeBar key={item._id} item={item} />
      ))}
     
    </Stack>
  );
}

export default HomeSpecials;

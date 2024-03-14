"use client";
import { Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import FoodContainer from "./FoodContainer";
import { useSearchParams } from "next/navigation";

function MenuPage() {
  
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("category");

  

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("/api/category");
    setData(res.data);
  };

  return (
    <Stack spacing={2} width={"100%"} px={"110px"} className="min-h-[800px]">
      <Stack direction={"row"} spacing={2} py={"32px"}>
        {data.map((category: string, index: number) => (
          <MenuCategory key={index} category={category} />
        ))}
      </Stack>
      <FoodContainer />
    </Stack>
  );
}

export default MenuPage;

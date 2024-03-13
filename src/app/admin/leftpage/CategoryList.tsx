"use client";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import axios from "axios";
import { useGlobalContext } from "@/app/context/Context";

function CategoryList() {
  const { setRefresh, refresh } = useGlobalContext();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    const res = await axios.get("/api/category");
    setData(res.data);
  };

  return (
    <Stack spacing={2}>
      {data.map((category: string, index: number) => (
        <Category key={index} category={category} />
      ))}
    </Stack>
  );
}

export default CategoryList;

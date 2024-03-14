"use client";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

function HomeBar({ item }: any) {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/food?category=${item.name}&amount=4`);
      setFood(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  return (
    <Stack spacing={2}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ width: "100%" }}
      >
        <Stack direction={"row"} alignItems={"center"} sx={{ width: "100%" }}>
          <Image src="/Star.png" width={32} height={32} alt="star" />
          <Typography>{item.name}</Typography>
        </Stack>
        <Link
          href={`/menu?category=${item.name}`}
          className="text-[#18BA51] w-[200px] flex items-center gap-4"
        >
          Бүгдийг харах
          <Image src="/chevron.png" alt="chevron" width={6} height={6} />
        </Link>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        {food.map((item) => (
          <FoodCard key={crypto.randomUUID()} item={item} size={"24%"} />
        ))}
      </Stack>
    </Stack>
  );
}

export default HomeBar;

import { Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { fetchFoodOnSale } from "../utils";

async function OnsaleBar({ item }: any) {
  const food: any = await fetchFoodOnSale();

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
          <Typography>Хямдралтай</Typography>
        </Stack>
        <Link
          href="/menu?category=onsale"
          className="text-[#18BA51] w-[200px] flex items-center gap-4"
        >
          Бүгдийг харах
          <Image src="/chevron.png" alt="chevron" width={6} height={6} />
        </Link>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        {food.map((item: any) => (
          <FoodCard key={crypto.randomUUID()} item={JSON.parse(JSON.stringify(item))} size={"24%"} />
        ))}
      </Stack>
    </Stack>
  );
}

export default OnsaleBar;

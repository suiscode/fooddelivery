"use client";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderCart from "./OrderCart";
import axios from "axios";
import { useRouter } from "next/navigation";

function Steptwo({ check, orderInfo }: any) {
  const [items, setItems] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const itemsJSON = localStorage.getItem("cartItems");
    const itemsFromLocal: any[] = itemsJSON ? JSON.parse(itemsJSON) : [];
    setItems(itemsFromLocal);
  }, []);

  let total = 0;

  items.forEach((item: any) => {
    total +=
      item.foodSalePrice !== null
        ? item.foodSalePrice * item.amount
        : item.foodPrice * item.amount;
  });

  const handleSubmit = async () => {
    console.log(orderInfo);
    try {
      const res = await axios.post("/api/order/", {
        ...orderInfo,
        totalPrice: total,
        items: items,
      });
      router.push("/history");
      localStorage.removeItem('cartItems')
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      alignItems={"start"}
      spacing={2}
      width={"45%"}
      p={4}
      className="relative"
      justifyContent={"center"}
      pt={"120px"}
    >
      <Stack
        width={"100%"}
        height={"612px"}
        className="box"
        p={3}
        borderRadius={"3%"}
        spacing={0}
        justifyContent={"space-between"}
      >
        <Stack height={"89%"} className=" overflow-scroll">
          {items.map((item) => (
            <OrderCart key={crypto.randomUUID()} item={item} />
          ))}
        </Stack>
        <Stack
          height={"10%"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack>
            <Typography>Нийт төлөх дүн</Typography>
            <Typography fontWeight={800} fontSize={"18px"}>
              {total}
            </Typography>
          </Stack>
          <button
            disabled={!check}
            onClick={() => handleSubmit()}
            className="px-16 py-2 border-2 rounded-md disabled:bg-[#EEEFF2] disabled:text-[#1C2024] disabled:text-opacity-25 bg-[#18BA51] text-white"
          >
            Захиалах
          </button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Steptwo;

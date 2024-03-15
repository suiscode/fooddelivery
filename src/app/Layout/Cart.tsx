"use client";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { relative } from "path";
import CartItem from "./CartItem";
import axios from "axios";
import { useGlobalContext } from "../context/Context";
import { Food } from "../api/models";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Cart({ toggleDrawer, items, setItems }: any) {
  const router = useRouter();

  let total = 0;

  items.forEach((item: any) => {

    total +=
      item.foodSalePrice !== null
        ? item.foodSalePrice * item.amount
        : item.foodPrice * item.amount;
  });

  const handleDec = (id: any) => {
    setItems((prev: any) => {
      return prev.map((item: any) => {
        if (id === item._id) {
          if (item.amount === 1) return item;
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    });
  };

  const handleInc = (id: any) => {
    setItems((prev: any) => {
      return prev.map((item: any) => {
        if (id === item._id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    });
  };

  const handleRemove = (id: string) => {
    setItems((prev: any[]) => {
      return prev.filter((item) => item._id !== id);
    });
  };

  return (
    <Stack width={"586px"} className="relative" height={"100%"}>
      <Stack direction={"row"} spacing={26} p={4}>
        <ArrowBackIosIcon onClick={toggleDrawer(false)} />
        <Typography textAlign={"center"} fontSize={"20px"}>
          Таны сагс
        </Typography>
      </Stack>
      <Stack p={2}>
        {items.map((item: any) => (
          <CartItem
            key={crypto.randomUUID()}
            item={item}
            handleRemove={handleRemove}
            handleDec={handleDec}
            handleInc={handleInc}
          />
        ))}
      </Stack>
      <Stack
        direction={"row"}
        p={4}
        className="absolute bottom-0 w-full shadow-top"
        alignItems={"center"}
      >
        <Stack width={"50%"}>
          <Typography>Нийт төлөх дүн</Typography>
          <Typography fontWeight={800} fontSize={"18px"}>
            {total}
          </Typography>
        </Stack>
        <Link
        href='/order'
           onClick={toggleDrawer(false)} 
          className="bg-[#18BA51] text-center text-white rounded-md w-1/2 py-3"
        >
          Захиалах
        </Link>
      </Stack>
    </Stack>
  );
}

export default Cart;

//

"use client";
import { Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { relative } from "path";
import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import { useGlobalContext } from "../context/Context";

function FoodCard({ item, size }: any) {
  const imageURL = `https://res.cloudinary.com/deifnil5n/image/upload/v1710223136/${item.foodImage}.jpg`;

  const { openModal, setOpenModal, modalInfo, setModalInfo } = useGlobalContext();

  const handleOpen = () => {
    if (!openModal) {
      console.log(item);

      console.log("item");
      setModalInfo({ ...item });
      setOpenModal(true);
    }
  };

  return (
    <Stack width={size} className="hover:p-1 cursor-pointer">
      <Stack
        onClick={handleOpen}
        width={"100%"}
        borderRadius={"20px"}
        overflow={"hidden"}
        height={"186px"}
        position={"relative"}
      >
        {item.foodOnSale && (
          <Typography
            zIndex={"10"}
            className="bg-[#18BA51] rounded-xl px-2 py-1 border-[1.5px] border-white text-center text-white absolute right-0 m-4 text-sm"
          >
            {Math.floor(100 - (item.foodSalePrice / item.foodPrice) * 100)}%
          </Typography>
        )}
        <Image src={imageURL} alt="show" fill style={{ objectFit: "cover" }} />
      </Stack>
      <Typography fontSize={"18px"} fontWeight={"700"}>
        {item.foodName}
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <Typography className="text-[#18BA51]">{item.foodPrice}₮</Typography>
        {item.foodSalePrice && (
          <Typography className="line-through">
            {item.foodSalePrice}₮
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default FoodCard;

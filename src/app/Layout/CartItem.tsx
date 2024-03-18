"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";


function CartItem({ item, handleRemove, handleDec, handleInc }: any) {
  const [amount, setAmount] = useState(item.amount);

  const imageURL = `https://res.cloudinary.com/deifnil5n/image/upload/v1710223136/${item.foodImage}.jpg`;

  return (
    <Stack
      className="border-y-[1.5px] py-4"
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Stack className=" flex border-2 p-2 relative w-[245px] h-[150px]">
        <Image
          src={imageURL}
          alt="food"
          fill
          style={{ objectFit: "cover" }}
        />
      </Stack>
      <Stack height={"150px"} justifyContent={"space-between"} width={"250px"}>
        <Stack spacing={0} className="relative">
          <Typography fontSize={"18px"} fontWeight={"700"}>
            {item.foodName}
          </Typography>
          <Typography
            fontSize={"18px"}
            fontWeight={"700"}
            className="text-[#18BA51]"
          >
            {item.foodOnSale ? item.foodSalePrice : item.foodPrice}
          </Typography>
          <CloseIcon
            onClick={() => handleRemove(item._id)}
            className="cursor-pointer self-end absolute top-5 right-5"
          />
        </Stack>
        <Stack>
          <Typography className="text-[#767676] rounded-lg p-2">
            {item.foodRecipe}
          </Typography>
        </Stack>

        <Stack direction={"row"} spacing={4}>
          <button
            onClick={()=>handleDec(item._id)}
            className="bg-[#18BA51] text-white text-2xl px-3 rounded-lg text-center"
          >
            -
          </button>
          <Typography>{amount}</Typography>
          <button
            onClick={()=>handleInc(item._id)}
            className="bg-[#18BA51] text-white text-2xl px-3 rounded-lg text-center"
          >
            +
          </button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CartItem;

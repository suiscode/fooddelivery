"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function CartItem() {
  const [amount, setAmount] = useState(1);

  const handleDec = () => {
    if (amount == 1) return;
    setAmount((prev) => prev - 1);
  };

  const handleInc = () => {
    setAmount((prev) => prev + 1);
  };
  return (
    <Stack
      className="border-y-[1.5px] py-4"
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Stack className=" flex border-2 p-2 relative w-[245px] h-[150px]">
        <Image
          // src={imageURL}
          src="/nopfp.png"
          alt="food"
          fill
          style={{ objectFit: "cover" }}
        />
      </Stack>
      <Stack height={"150px"} justifyContent={"space-between"} width={"250px"}>
        <Stack spacing={0}>
          <Typography fontSize={"18px"} fontWeight={"700"}>
            {/* {item.foodName} */}
            Name
          </Typography>
          <Typography
            fontSize={"18px"}
            fontWeight={"700"}
            className="text-[#18BA51]"
          >
            {/* {item.foodOnSale ? item.foodSalePrice : item.foodPrice} */}
            Price
          </Typography>
        </Stack>
        <Stack>
          <Typography className="text-[#767676] rounded-lg p-2">
            {/* {item.foodRecipe} */}
            Orts
          </Typography>
        </Stack>

        <Stack direction={"row"} spacing={4}>
          <button
            onClick={handleDec}
            className="bg-[#18BA51] text-white text-2xl px-3 rounded-lg text-center"
          >
            -
          </button>
          <Typography>{amount}</Typography>
          <button
            onClick={handleInc}
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

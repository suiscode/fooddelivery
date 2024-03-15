import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function OrderCart({ item }: any) {
  const imageURL = `https://res.cloudinary.com/deifnil5n/image/upload/v1710223136/${item.foodImage}.jpg`;

  return (
    <Stack
      className="border-y-[1.5px] py-4"
      direction={"row"}
      justifyContent={"space-between"}
      spacing={2}
    >
      <Stack className=" flex p-2 relative w-[245px] h-[121px]">
        <Image src={imageURL} alt="food" fill style={{ objectFit: "cover" }} />
      </Stack>
      <Stack width={"250px"}>
        <Stack spacing={0} className="relative">
          <Typography fontSize={"18px"} fontWeight={"700"}>
            {item.foodName} x {item.amount}
          </Typography>
          <Typography
            fontSize={"18px"}
            fontWeight={"700"}
            className="text-[#18BA51]"
          >
            {item.foodOnSale
              ? item.foodSalePrice * item.amount
              : item.foodPrice * item.amount}
            ₮
          </Typography>
        </Stack>
        <Stack>
          <Typography className="text-[#767676] rounded-lg ">
            {item.foodRecipe}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OrderCart;

"use client";
import { Stack, Typography } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

function MenuCategory({ category }: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const queryParam = searchParams.get("category");

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category.name);
    replace(`${pathname}?${params}`);
  };

  return (
    <Stack
      style={
        category.name !== queryParam
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
      className={`border-2 w-[24%] py-2 rounded-lg cursor-pointer hover:border-gray-400`}
      onClick={handleClick}
    >
      <Typography
        fontWeight={"500"}
        style={
          category.name === queryParam ? { color: "white" } : { color: "black" }
        }
        textAlign={"center"}
      >
        {category.name}
      </Typography>
    </Stack>
  );
}

export default MenuCategory;

"use client";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

function MenuCategory({ category }: any) {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("category");
  return (
    <Link
      className="border-2 w-[24%] py-2 rounded-lg"
      href={`/menu?category=${category.name}`}
      style={
        category.name === queryParam
          ? { backgroundColor: "#18BA51" }
          : { backgroundColor: "white" }
      }
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
    </Link>
  );
}

export default MenuCategory;

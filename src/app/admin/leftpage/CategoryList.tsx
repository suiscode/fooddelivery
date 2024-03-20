import { Stack } from "@mui/material";
import React from "react";
import Category from "./Category";

function CategoryList({data}:any) {

  return (
    <Stack spacing={2}>
      {data.map((category: string, index: number) => (
        <Category key={index} category={JSON.parse(JSON.stringify(category))} />
      ))}
    </Stack>
  );
}

export default CategoryList;

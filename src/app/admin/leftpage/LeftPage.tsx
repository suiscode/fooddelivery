import { Stack, Typography } from "@mui/material";
import React from "react";
import Category from "./Category";
import CreateCategoryButton from "./CreateCategoryButton";
import CategoryList from "./CategoryList";

function LeftPage({data}:any) {
  return (
    <Stack width={"20%"} spacing={4}>
      <Typography variant="h5" fontWeight={"600"}>
        Food menu
      </Typography>
      <CategoryList data={JSON.parse(JSON.stringify(data))}/>
      <CreateCategoryButton />
    </Stack>
  );
}

export default LeftPage;

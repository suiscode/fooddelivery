import { Stack, Typography } from "@mui/material";
import React from "react";
import Category from "./Category";
import CreateCategoryButton from "./CreateCategoryButton";
import CategoryList from "./CategoryList";

function LeftPage() {
  return (
    <Stack width={"20%"} border={"2px solid red"} spacing={4}>
      <Typography variant="h5" fontWeight={"600"}>
        Food menu
      </Typography>
      <CategoryList />
      <CreateCategoryButton />
    </Stack>
  );
}

export default LeftPage;

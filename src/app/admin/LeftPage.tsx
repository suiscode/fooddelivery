import { Stack, Typography } from "@mui/material";
import React from "react";
import Category from "./Category";
import CreateCategoryButton from "./CreateCategoryButton";

function LeftPage() {
  return (
    <Stack width={"20%"} border={"2px solid red"} spacing={4}>
      <Typography variant="h5" fontWeight={"600"}>
        Food menu
      </Typography>
      <Stack spacing={2}>
        <Category/>
        <Category/>
        <Category/>
        <CreateCategoryButton/>
      </Stack>
    </Stack>
  );
}

export default LeftPage;

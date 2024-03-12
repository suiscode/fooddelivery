"use client";
import { Box, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CreateCategory from "./CreateCategory";

function CreateCategoryButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (!open) { setOpen(true); }
  };



  return (
    <Stack
      onClick={handleOpen}
      color={"gray"}
      direction={"row"}
      spacing={2}
      padding={"5px"}
      border={1}
      borderRadius={"10px"}
      className="cursor-pointer"
    >
      <AddIcon />
      <Typography>Create new category</Typography>
      <CreateCategory open={open} setOpen={setOpen}/>
    </Stack>
  );
}

// onClick={handleOpen}

export default CreateCategoryButton;

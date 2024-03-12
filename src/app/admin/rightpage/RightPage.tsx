"use client";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateNewFood from "./CreateNewFood";
import { useSearchParams } from "next/navigation";
import axios from "axios";

function RightPage() {
  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const queryParam = searchParams.get("category");

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const categoryName = "Breakfast";

  const fetchFood = async () => {
    const res = await axios.get("/api/food");
    console.log(res);
  };

  useEffect(() => {
    fetchFood();
  }, [queryParam]);

  return (
    <Stack width={"80%"} border={"2px solid green"} p={4}>
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Typography variant="h6" className="font-bold">
          {queryParam}
        </Typography>
        <button
          onClick={handleOpen}
          className="bg-[#18BA51] text-white rounded-md px-3 py-2 hover:bg-opacity-90"
        >
          Add new food
        </button>
        <CreateNewFood setOpen={setOpen} open={open} />
      </Stack>
      <h1>Categorynii id g avaad yvulad fetch hiiged ternese avarai food list ee</h1>

    </Stack>
  );
}

export default RightPage;

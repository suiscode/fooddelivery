"use client";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "16px",
  border: "1px #D6D8DB solid",
  "& svg": {
    color: "#18BA51",
  },
}));

function Homemenuper({ title, desc, img }: any) {
  return (
    <Stack>
      <Item elevation={2} className="flex flex-col p-5">
        {img}
        <Stack>
          <Typography className="font-bold text-lg">{title}</Typography>
          <Typography className="text-[#272727 font-light]">{desc}</Typography>
        </Stack>
      </Item>
    </Stack>
  );
}

export default Homemenuper;

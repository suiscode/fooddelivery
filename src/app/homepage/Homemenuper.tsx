"use client";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "16px",
  border: "1px #D6D8DB solid",
  "& svg": {
    color: "#18BA51",
  },
}));

function Homemenuper({ title, desc, img }: any) {
  return (
    <div>
      <Item elevation={2} className="flex flex-col p-5">
        {img}
        <div>
          <h1 className="font-bold text-lg">{title}</h1>
          <h1 className="text-[#272727 font-light]">{desc}</h1>
        </div>
      </Item>
    </div>
  );
}

export default Homemenuper;

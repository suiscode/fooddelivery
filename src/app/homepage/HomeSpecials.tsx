import React from "react";
import HomeBar from "./HomeBar";
import { Stack } from "@mui/material";

function HomeSpecials() {
  return (
    <Stack sx={{width:'100%', paddingInline:'120px'}}>
      <HomeBar label={"Хямдралтай"} link={"/"} />
      <HomeBar label={"Үндсэн хоол"} link={"/"} />
      <HomeBar label={"Салад ба зууш"} link={"/"} />
      <HomeBar label={"Амттан"} link={"/"} />
    </Stack>
  );
}

export default HomeSpecials;

"use client";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import Stepone from "./Stepone";
import Steptwo from "./Steptwo";

function OrderPage() {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <Stack
      direction={"row"}
      border={1}
      width={"75%"}
      justifyContent={"space-between"}
    >
      <Stepone check={check} setCheck={setCheck} />
      <Steptwo check={check} />
    </Stack>
  );
}

export default OrderPage;

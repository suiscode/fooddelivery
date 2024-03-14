import { Stack } from "@mui/material";
import React from "react";
import Stepone from "./Stepone";
import Steptwo from "./Steptwo";

function OrderPage() {
  return (
    <Stack
      direction={"row"}
      border={1}
      width={"75%"}
      justifyContent={"space-between"}
    >
      <Stepone />
      <Steptwo />
    </Stack>
  );
}

export default OrderPage;

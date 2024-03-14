import { Stack } from "@mui/material";
import React from "react";

function BlueCheck() {
  return (
    <Stack
      borderRadius={"100%"}
      border={"1.4px solid #0468C8"}
      width={"48px"}
      height={"48px"}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack
        borderRadius={"100%"}
        bgcolor={'#0468C8'}
        width={"24px"}
        height={"24px"}
      ></Stack>
    </Stack>
  );
}

export default BlueCheck;

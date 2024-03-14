import React from "react";
import BlueCheck from "./BlueCheck";
import StepTitle from "./StepTitle";
import { Stack } from "@mui/material";

function StepLabel({step,title,state}:any) {
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={2} justifyContent={'center'} px={4}>
      <BlueCheck />
      <StepTitle
        step={step}
        title={title}
        state={state}
      />
    </Stack>
  );
}

export default StepLabel;

import { Stack } from "@mui/material";
import React from "react";
import StepLabel from "./Steplabel/StepLabel";

function Steptwo() {
  return (
    <Stack alignItems={"center"} spacing={2}>
      <StepLabel
        step={"2"}
        title={"Захиалга баталгаажуулах"}
        state={"Хүлээгдэж байна"}
      />
    </Stack>
  );
}

export default Steptwo;

import { Stack, Typography } from "@mui/material";
import React from "react";
import StepLabel from "./Steplabel/StepLabel";
import InfoProvider from "./InfoProvider";

function Stepone() {
  return (
    <Stack
      alignItems={"start"}
      spacing={2}
      width={"45%"}
      p={4}
      justifyContent={"center"}
    >
      <StepLabel
        step={"1"}
        title={"Хаягийн мэдээлэл оруулах"}
        state={"Хүлээгдэж байна"}
      />
      <InfoProvider />
    </Stack>
  );
}

export default Stepone;

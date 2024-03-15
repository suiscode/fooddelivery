"use client";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import InfoProvider from "./InfoProvider";
import StepTitle from "./Steplabel/StepTitle";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

function Stepone({ check, setCheck }: any) {
  return (
    <Stack
      alignItems={"start"}
      spacing={2}
      width={"45%"}
      p={4}
      justifyContent={"center"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        justifyContent={"center"}
        px={4}
      >
        <>
          {check ? (
            <Stack
              bgcolor={"#18BA51"}
              width={"48px"}
              height={"48px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
            >
              <CheckOutlinedIcon className="text-white" />
            </Stack>
          ) : (
            <Stack
              borderRadius={"100%"}
              border={"1.4px solid #0468C8"}
              width={"48px"}
              height={"48px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack
                borderRadius={"100%"}
                bgcolor={"#0468C8"}
                width={"24px"}
                height={"24px"}
              ></Stack>
            </Stack>
          )}
        </>
        <StepTitle
          step={"1"}
          title={"Хаягийн мэдээлэл оруулах"}
          state={"Хүлээгдэж байна"}
          check={check}
        />
      </Stack>

      <InfoProvider setCheck={setCheck} />
    </Stack>
  );
}

export default Stepone;

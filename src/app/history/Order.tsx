import { Stack, Typography } from "@mui/material";
import React from "react";

function Order({ item }: any) {

  return (
    <Stack direction={"row"} borderBottom={1} paddingY={2} px={3} borderColor={'gray'}>
      <Typography
        width={"100%"}
        justifyContent={"space-between"}
        display={"flex"}
      >
        {item.foodName}
      </Typography>
      <Typography>{`(${item.amount})`}</Typography>
    </Stack>
  );
}

export default Order;

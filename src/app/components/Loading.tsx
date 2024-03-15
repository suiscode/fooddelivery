import { CircularProgress, Stack } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <Stack width={"100%"} justifyContent={'center'} alignItems={'center'}>
      <CircularProgress />
    </Stack>
  );
}

export default Loading;

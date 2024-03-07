import { Stack, Typography } from "@mui/material";
import React from "react";

function LeftPage() {
  return (
    <Stack width={"20%"} border={"2px solid red"}>
      <Typography variant="h5" fontWeight={"600"}>
        Food menu
      </Typography>
      <Stack>
        <Typography>Test</Typography>
      </Stack>
    </Stack>
  );
}

export default LeftPage;

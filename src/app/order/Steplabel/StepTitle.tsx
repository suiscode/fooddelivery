import { Stack, Typography } from "@mui/material";
import React from "react";

function StepTitle({ step, title, state }: any) {
  return (
    <Stack>
      <Typography className="text-[#8B8E95] text-sm">Алхам {step}</Typography>
      <Typography className="text-black text-xl">{title}</Typography>
      <Typography className="text-[#0468C8]">{state}</Typography>
    </Stack>
  );
}

export default StepTitle;

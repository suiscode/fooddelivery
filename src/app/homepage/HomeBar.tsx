import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeBar({ label,link }: any) {
  return (
    <Stack>
      <Stack direction='row' justifyContent={'space-between'} alignItems={'center'}  sx={{width:'100%'}}>
        <Stack direction={'row'} alignItems={'center'} sx={{width:'100%'}} >
          <Image src="/Star.png" width={32} height={32} alt="star" />
          <Typography>{label}</Typography>
        </Stack>
        <Link href={link} className="text-[#18BA51] w-[200px] flex items-center gap-4">
          Бүгдийг харах
          <Image src="/chevron.png" alt="chevron" width={6} height={6} />
        </Link>
      </Stack>
      <Stack>Data here</Stack>
    </Stack>
  );
}

export default HomeBar;

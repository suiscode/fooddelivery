'use client'
import { Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchInput from "./SearchInput";

function InfoProvider() {


  const [search,setSearch] = useState('')

  return (
    <Stack
      width={"100%"}
      height={"612px"}
      className="box"
      p={3}
      borderRadius={"3%"}
      spacing={4}
    >
      <Stack spacing={1}>
        <Typography>Хаяг аа оруулна уу</Typography>
        <Stack className="relative" justifyContent={"center"}>
          <input
            type="text"
            value={search}
            onChange={e=>setSearch(e.target.value)}
            placeholder="Дүүрэг сонгоно уу"
            className="bg-[#F7F7F8] pl-12 outline-none h-12 rounded-md border-[2px] border-[#ECEDF0]"
          />
          <FmdGoodOutlinedIcon className="absolute w-6 h-6 left-4" />
          {search && <SearchInput/>}
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Typography>Нэмэлт мэдээлэл</Typography>

        <Stack className="relative" justifyContent={"center"}>
          <textarea
            className="bg-[#F7F7F8] border-[#ECEDF0] border-[2px] h-[160px] px-4 py-2 rounded-md outline-none"
            placeholder="Орц, давхар, орцны код ..."
          ></textarea>
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Typography>Нэмэлт мэдээлэл*</Typography>

        <Stack className="relative" justifyContent={"center"}>
          <input
            className="bg-[#F7F7F8] border-[#ECEDF0] border-[2px] px-4 py-2 rounded-md outline-none"
            placeholder="Орц, давхар, орцны код ..."
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default InfoProvider;

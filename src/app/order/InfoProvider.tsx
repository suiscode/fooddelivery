"use client";
import { Checkbox, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchInput from "./SearchInput";
import axios from "axios";

interface OrderInfo {
  search: string;
  cardCheck: boolean;
  cashCheck: boolean;
  additionalInfo: string;
  phoneNumber: string;
}

function InfoProvider({ setCheck, orderInfo, handleChange,setOrderInfo }: any) {
  const { search, cardCheck, cashCheck, additionalInfo, phoneNumber } =
    orderInfo;
  const [state, setState] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderInfo((prev:OrderInfo)=>({...prev,search:e.target.value}))
    if (!state) setState(true);
  };
  useEffect(() => {
    console.log(orderInfo);

    if (
      search &&
      additionalInfo &&
      phoneNumber.length === 8 &&
      (cardCheck || cashCheck)
    ) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [search, cardCheck, cashCheck, additionalInfo, phoneNumber]);

  useEffect(() => {
    const fetchLocation = async () => {
      const api = `https://z4ryw4kny0.execute-api.ap-southeast-1.amazonaws.com/production/searchByAddress?address=${search}`;
      try {
        const res = await axios.get(api);
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (search) {
      fetchLocation();
    }
  }, [search]);

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
            name="search"
            onChange={handleChanges}
            placeholder="Дүүрэг сонгоно уу"
            className="bg-[#F7F7F8] pl-12 outline-none h-12 rounded-md border-[2px] border-[#ECEDF0]"
          />
          <FmdGoodOutlinedIcon className="absolute w-6 h-6 left-4" />
          {state && (
            <SearchInput
              search={search}
              setOrderInfo={setOrderInfo}
              data={data}
              state={state}
              setState={setState}
            />
          )}
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Typography>Нэмэлт мэдээлэл</Typography>

        <textarea
          value={additionalInfo}
          name="additionalInfo"
          onChange={handleChange}
          className="bg-[#F7F7F8] border-[#ECEDF0] border-[2px] h-[160px] px-4 py-2 rounded-md outline-none"
          placeholder="Орц, давхар, орцны код ..."
        ></textarea>
      </Stack>
      <Stack spacing={1}>
        <Typography>Утасны дугаар*</Typography>

        <input
          onWheel={(e) => e.currentTarget.blur()}
          value={phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          type="number"
          className="bg-[#F7F7F8] border-[#ECEDF0] border-[2px] px-4 py-2 rounded-md outline-none"
          placeholder="Утасны дугаараа оруулна уу*"
        />
      </Stack>
      <Stack spacing={1}>
        <Typography>Утасны дугаар*</Typography>

        <Stack direction={"row"} alignItems={"center"}>
          <Checkbox
            checked={cardCheck}
            name="cardCheck"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <label>Бэлнээр</label>
          <Checkbox
            className="ml-32"
            checked={cashCheck}
            name="cashCheck"
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <label>Картаар</label>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default InfoProvider;

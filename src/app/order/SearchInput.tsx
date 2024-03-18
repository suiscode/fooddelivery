import { Stack, Typography } from "@mui/material";
import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

interface OrderInfo {
  search: string;
  cardCheck: boolean;
  cashCheck: boolean;
  additionalInfo: string;
  phoneNumber: string;
}

function SearchInput({ data, setState, setOrderInfo }: any) {
  const handleClick = (address: string) => {
    console.log(address);
    setOrderInfo((prev:OrderInfo)=>({...prev,search:address}))
    setState(false);
  };

  return (
    <Stack className="absolute top-[45px] h-[225px] overflow-scroll w-full  z-10 border-[2px] bg-white">
      {data.map((item: any) => (
        <Typography
          key={crypto.randomUUID()}
          onClick={() => handleClick(item.full_address)}
          className="px-[14px] py-3 hover:bg-slate-100"
        >
          <FmdGoodOutlinedIcon className="w-6 h-6 left-4 mr-2" />
          {item.full_address}
        </Typography>
      ))}
    </Stack>
  );
}

export default SearchInput;

"use client";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import Stepone from "./Stepone";
import Steptwo from "./Steptwo";

function OrderPage() {
  const [check, setCheck] = useState<boolean>(false);

  const [orderInfo, setOrderInfo] = useState<any>({
    search: "",
    cardCheck: false,
    cashCheck: false,
    additionalInfo: "",
    phoneNumber: "",
  });

  interface OrderInfo {
    search: string;
    cardCheck: boolean;
    cashCheck: boolean;
    additionalInfo: string;
    phoneNumber: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
  
    // Narrow down the type of the event target to HTMLInputElement
    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setOrderInfo((prevState: OrderInfo) => ({
        ...prevState,
        [name]: isChecked
      }));
    } else {
      setOrderInfo((prevState: OrderInfo) => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  
  return (
    <Stack
      direction={"row"}
      border={1}
      width={"75%"}
      justifyContent={"space-between"}
    >
      <Stepone
        check={check}
        setCheck={setCheck}
        orderInfo={orderInfo}
        handleChange={handleChange}
        setOrderInfo={setOrderInfo}
      />
      <Steptwo check={check} orderInfo={orderInfo} />
    </Stack>
  );
}

export default OrderPage;

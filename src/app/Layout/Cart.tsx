import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { relative } from "path";
import CartItem from "./CartItem";
import axios from "axios";
import { useGlobalContext } from "../context/Context";

function Cart({ toggleDrawer, open }: any) {
  const [data, setData] = useState([]);
  const { cartInfo } = useGlobalContext();

  useEffect(() => {
    fetchCart();
  }, [open]);

  const fetchCart = async () => {
    console.log(cartInfo,'hello');

    const res = await axios.put("/api/food", {
      items: [cartInfo],
    });
  };

  return (
    <Stack width={"586px"} className="relative" height={"100%"}>
      <Stack direction={"row"} spacing={26} p={4}>
        <ArrowBackIosIcon onClick={toggleDrawer(false)} />
        <Typography textAlign={"center"} fontSize={"20px"}>
          Таны сагс
        </Typography>
      </Stack>
      <Stack p={2}>
        <CartItem />
      </Stack>
      <Stack
        direction={"row"}
        spacing={26}
        p={4}
        className="absolute bottom-0 w-full shadow-top"
      >
        <Stack>
          <Typography>Нийт төлөх дүн</Typography>
          <Typography>1000</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Cart;

//

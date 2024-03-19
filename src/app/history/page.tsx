"use client";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import History from "./History";
import Order from "./Order";

function HistoryPage() {
  const [data, setData] = useState<any[]>([]);
  const [id, setId] = useState<string>("");
  useEffect(() => {
    const fetchOrder = async () => {
      const res = await axios.get("/api/order");
      setData(res.data);
      setId(res.data[0]._id);
    };
    fetchOrder();
  }, []);

  const check = false;
  let filteredOrder = data.filter((item) => item._id === id)[0]?.foods;

  return (
    <Stack width={"100%"} direction={"row"} justifyContent={"space-around"}>
      <Stack
        width={"30%"}
        height={"612px"}
        className="box"
        p={3}
        borderRadius={"3%"}
        spacing={2}
      >
        <Typography className="text-2xl">Захиалгын түүх</Typography>
        <Stack spacing={2}>
          {data.map((item) => (
            <History
              setId={setId}
              id={id}
              key={item._id}
              check={check}
              item={item}
            />
          ))}
        </Stack>
      </Stack>
      <Stack
        width={"30%"}
        height={"612px"}
        className="box"
        p={3}
        borderRadius={"3%"}
        spacing={2}
      >
        <Typography className="text-2xl">Захиалгын дэлгэрэнгүй</Typography>
        <Stack>
          {filteredOrder?.map((item: any) => (
            <Order item={item} key={item._id} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HistoryPage;

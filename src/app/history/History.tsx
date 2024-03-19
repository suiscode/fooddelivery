import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Stack, Typography } from "@mui/material";

function History({ check, item, setId, id }: any) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={2}
      paddingBottom={2}
      onClick={() => setId(item._id)}
      borderColor={item.process ? "#18BA51" : "#0468C8"}
      className={`${item.process && "opacity-40"} cursor-pointer ${item._id === id && 'bg-slate-100' } rounded-lg`}
    >
      <Stack direction={"row"} spacing={2}>
        {item.process ? (
          <Stack
            bgcolor={"#18BA51"}
            width={"48px"}
            height={"48px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
          >
            <CheckOutlinedIcon className="text-white" />
          </Stack>
        ) : (
          <Stack
            borderRadius={"100%"}
            border={"1.4px solid #0468C8"}
            width={"48px"}
            height={"48px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              borderRadius={"100%"}
              bgcolor={"#0468C8"}
              width={"24px"}
              height={"24px"}
            ></Stack>
          </Stack>
        )}
        <Stack>
          <Typography>{item.orderNumber}</Typography>
          {item.process ? (
            <Typography>Success</Typography>
          ) : (
            <Typography>Nah</Typography>
          )}
        </Stack>
      </Stack>
      <Typography>{item.createdAt.split("T")[0].replace(/-/g, "/")}</Typography>
    </Stack>
  );
}

export default History;

import React from "react";
import Forminput from "./Forminput";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import { Stack, Typography } from "@mui/material";

function FormFirst({ user, setState, handleSubmit,handleSignOut }: any) {

 
  return (
    <Stack spacing={6} paddingBottom={"100px"} width={"100%"}>
      <Stack onSubmit={handleSubmit} width={"100%"} spacing={2}>
        <Forminput
          img={<PermIdentityOutlinedIcon />}
          input={user.name}
          setState={setState}
          type={false}
          label={'Таны нэр'}

        />
        <Forminput
          img={<LocalPhoneOutlinedIcon />}
          input={user.phoneNumber}
          setState={setState}
          type={false}
          label={'Дугаар'}
        />
        <Forminput
          img={<ForwardToInboxOutlinedIcon />}
          input={user.email}
          setState={setState}
          type={false}
          label={'И-Мэйл'}

        />
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        bgcolor={"white"}
        height={16}
        borderRadius={"2px"}
        alignItems={"center"}
        spacing={2}
        paddingInline={"20px"}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={"white"}
          borderRadius={"50%"}
          sx={{ borderRadius: "50%", border: "1px solid gray" }}
          width={"48px"}
          height={"48px"}
        >
          <HistoryIcon />
        </Stack>
        <Typography>Захиалгын түүх</Typography>
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        bgcolor={"white"}
        height={16}
        borderRadius={"2px"}
        alignItems={"center"}
        spacing={2}
        paddingInline={"20px"}
        className="cursor-pointer"
        onClick={()=>handleSignOut()}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={"white"}
          borderRadius={"50%"}
          sx={{ borderRadius: "50%", border: "1px solid gray" }}
          width={"48px"}
          height={"48px"}
        >
          <HistoryIcon />
        </Stack>
        <Typography>Гарах</Typography>
      </Stack>
    </Stack>
  );
}

export default FormFirst;

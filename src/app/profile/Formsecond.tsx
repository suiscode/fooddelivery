import React from 'react'
import Forminput from './Forminput'
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import Button from "@mui/material/Button";

function Formsecond({user, setState,handleSubmit}:any) {
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
    <Forminput
      img={<PermIdentityOutlinedIcon />}
      input={user.name}
      setState={setState}
    />
    <Forminput
      img={<LocalPhoneOutlinedIcon />}
      input={user.phoneNumber}
      setState={setState}
    />
    <Forminput
      img={<ForwardToInboxOutlinedIcon />}
      input={user.email}
      setState={setState}
    />

    <button className="bg-[#18BA51] text-white text-lg py-4 rounded-sm">
      Хадгалах 2
    </button>
  </form>
  )
}

export default Formsecond
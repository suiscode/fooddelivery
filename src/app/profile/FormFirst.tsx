import React from 'react'
import Forminput from './Forminput'
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import Button from "@mui/material/Button";

function FormFirst({user, setState,handleSubmit}:any) {
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
    <div className="bg-gray-100 w-full h-16 rounded-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-full border-[1px] w-12 h-12 flex items-center justify-center">
        </div>
        <div className="flex flex-col">
          <h1 className="text-gray-400 font-light">Таны нэр</h1>
          <h1>hello</h1>
        </div>
      </div>
    </div>
   
  </form>
  )
}

export default FormFirst
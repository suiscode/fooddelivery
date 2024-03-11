import React from "react";
import Forminput from "./Forminput";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

function Formsecond({ user, setState, handleSubmit, setUser, label }: any) {
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className="bg-gray-100 w-full h-16 rounded-sm flex items-center justify-between px-6">
        <div className="flex items-center gap-2 w-full">
          <div className="bg-white rounded-full border-[1px] w-12 h-12 flex items-center justify-center">
            <PermIdentityOutlinedIcon />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-gray-400 font-light">Таны нэр</h1>
            <input
              className="bg-gray-100 outline-none w-full"
              value={user.name}
              onChange={(e) =>
                setUser((prevUser: any) => ({
                  ...prevUser,
                  name: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <CreateOutlinedIcon
          className="text-[#18BA51] w-[50px] cursor-pointer"
          onClick={(e) => setState(true)}
        />
      </div>
      <div className="bg-gray-100 w-full h-16 rounded-sm flex items-center justify-between px-6">
        <div className="flex items-center gap-2 w-full">
          <div className="bg-white rounded-full border-[1px] w-12 h-12 flex items-center justify-center">
            <PermIdentityOutlinedIcon />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-gray-400 font-light">Дугаар</h1>
            <input
              className="bg-gray-100 outline-none w-full"
              value={user.phoneNumber}
              onChange={(e) =>
                setUser((prevUser: any) => ({
                  ...prevUser,
                  phoneNumber: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <CreateOutlinedIcon
          className="text-[#18BA51] w-[50px] cursor-pointer"
          onClick={(e) => setState(true)}
        />
      </div>{" "}
      <div className="bg-gray-100 w-full h-16 rounded-sm flex items-center justify-between px-6">
        <div className="flex items-center gap-2 w-full">
          <div className="bg-white rounded-full border-[1px] w-12 h-12 flex items-center justify-center">
            <PermIdentityOutlinedIcon />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-gray-400 font-light">И-Мэйл</h1>
            <input
              className="bg-gray-100 outline-none w-full"
              value={user.email}
              onChange={(e) =>
                setUser((prevUser: any) => ({
                  ...prevUser,
                  email: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <CreateOutlinedIcon
          className="text-[#18BA51] w-[50px] cursor-pointer"
          onClick={(e) => setState(true)}
        />
      </div>
      <button className="bg-[#18BA51] text-white text-lg py-4 rounded-sm">
        Хадгалах 2
      </button>
    </form>
  );
}

export default Formsecond;

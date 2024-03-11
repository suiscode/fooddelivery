"use client";
import React from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

function Forminput({ input, setState, img, type, setUser,label }: any) {
  return (
    <div className="bg-gray-100 w-full h-16 rounded-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-2 w-full">
        <div className="bg-white rounded-full border-[1px] w-12 h-12 flex items-center justify-center">
          {img}
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-gray-400 font-light">{label}</h1>
          {type ? (
            <input
              className="bg-gray-100 outline-none w-full"
              value={input}
              onChange={(e) => {
                setUser((prevUser: any) => ({
                  ...prevUser,
                  input: e.target.value,
                }));
              }}
            />
          ) : (
            <h1>{input}</h1>
          )}
        </div>
      </div>
      <CreateOutlinedIcon
        className="text-[#18BA51] w-[50px] cursor-pointer"
        onClick={(e) => setState(true)}
      />
    </div>
  );
}

export default Forminput;

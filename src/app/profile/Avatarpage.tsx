import React from "react";
import Avatar from "@mui/material/Avatar";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Image from "next/image";


function AvatarPage({user,handleFileUpload}:any) {


  const image = `https://res.cloudinary.com/deifnil5n/image/upload/v1710123269/${user.imageUrl}.jpg`
  
  return (
    <div className="flex relative">
      <Avatar
        alt="Avatar"
        src={user.imageUrl ? image : "./nopfp.png"}
        sx={{ width: 120, height: 120 }}
      />
      <label className="custom-file-upload">
        <input type="file" onChange={handleFileUpload} />
        <div className="flex cursor-pointer items-center justify-center w-[45px] h-[45px] rounded-full border-2 bg-white absolute bottom-[-6px] right-[-10px]">
          <CreateOutlinedIcon className="text-[#18BA51] w-[50px]" />
        </div>
      </label>
    </div>
  );
}

export default AvatarPage;

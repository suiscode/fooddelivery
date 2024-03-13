"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AvatarPage from "./Avatarpage";
import FormFirst from "./FormFirst";
import Formsecond from "./Formsecond";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ProfilePage() {
  type UserType = {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
    imageUrl: string;
  };


  const router = useRouter()
  const [user, setUser] = useState<UserType>({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);

  const fetchUser = async () => {
    const response = await axios.get("/api/user");
    setUser(response.data.data);
    setLoading(false);
    console.log("ran");
  };
  useEffect(() => {
  
    fetchUser();
  }, []);

  ///// UPLOAD IMAGE /////

  async function handleFileUpload(event: any) {
    const cloudinaryConfig = {
      cloud_name: "deifnil5n",
      api_key: "534983861781594",
      api_secret: "6qzroYr2gOFRNtgQt-tSNERmsH4",
      uploadPreset: "tuguldur",
    };
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryConfig.uploadPreset);
    const url = `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloud_name}/image/upload`;
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });
      console.log(response);
      const res = await axios.put('/api/user/image',{
        publicID:response.data.public_id,
      })
      fetchUser()
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.put("/api/user", {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
    setState(false);
  };

  const handleSignOut=async()=>{
    try {
      await axios.put("/api/signin");
      router.push('/login')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Stack
      alignItems={"center"}
      spacing={4}
      sx={{ padding: "12px", width: "500px" }}
    >
      <AvatarPage user={user} handleFileUpload={handleFileUpload} />
      <Typography sx={{ fontWeight: "700" }} className="text-3xl">
        {user.name}
      </Typography>
      {!state ? (
        <FormFirst user={user} setState={setState} handleSignOut={handleSignOut}/>
      ) : (
        <Formsecond
          handleSubmit={handleSubmit}
          user={user}
          setState={setState}
          setUser={setUser}
        />
      )}
      {user.role === "admin" && (
        <Link
          className="text-xl text-green-300 bg-slate-400 rounded-md px-4"
          href="/admin"
        >
          Admin Page
        </Link>
      )}
    </Stack>
  );
}

export default ProfilePage;

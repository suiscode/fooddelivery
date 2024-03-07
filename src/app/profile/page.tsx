"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AvatarPage from "./Avatarpage";
import FormFirst from "./FormFirst";
import Formsecond from "./Formsecond";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

function profilePage() {
  type UserType = {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
    picture: string;
  };

  const [user, setUser] = useState<UserType>({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    picture: "",
  });
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("/api/user");
      setUser(response.data.data);
      setLoading(false);
      console.log("ran");
    };
    fetchUser();
  }, []);

  async function handleFileUpload(event: any) {
    const file = event.target.files[0];
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);
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
        <FormFirst user={user} setState={setState} />
      ) : (
        <Formsecond
          handleSubmit={handleSubmit}
          user={user}
          setState={setState}
          setUser={setUser}
        />
      )}
      {user.role === "admin" && <Link className="text-xl text-green-300 bg-slate-400 rounded-md px-4" href="/admin">Admin Page</Link>}
    </Stack>
  );
}

export default profilePage;

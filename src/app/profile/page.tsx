"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AvatarPage from "./Avatarpage";
import FormFirst from "./FormFirst";
import Formsecond from "./Formsecond";

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
    };
    fetchUser();
  }, []);

  function handleFileUpload(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios.post("/api/imageupload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setState(false);
  };

  return (
    <div className="flex flex-col items-center gap-10 p-12 w-[500px]">
      <AvatarPage user={user} handleFileUpload={handleFileUpload} />
      <h1 className="text-3xl font-bold">{user.name}</h1>
      {!state ? <FormFirst user={user} setState={setState}/> : <Formsecond user={user} setState={setState}/>}
    </div>
  );
}

export default profilePage;

"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Stagethree({ email, setStage }: any) {
  const [error, setError] = useState("");
  const [info, setInfo] = useState({ password: "", verification: "" });
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [verificationShow, setVerificationShow] = useState(false);

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (info.password !== info.verification) {
        setError("Passwords doesnt match");
        setLoading(false);
        return;
      }
      const response = await axios.put("/api/forgot", {
        password: info.password,
        email: email,
      });
      router.push('/login')
      setInfo({ password: "", verification: "" });
      setStage(1);
    } catch (e: any) {
      setError(e.response.data);
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center gap-8 w-[448px] p-8">
      <h1 className="font-bold text-[28px]">Нууц үг сэргээх</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <div className="flex flex-col relative">
          <label>Нууц үг</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="Нууц үг"
            type={!show ? "password" : "text"}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, password: e.target.value }))
            }
            value={info.password}
          />
          <Image
            src="/eyehide.png"
            className="absolute right-4 bottom-3 cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
            width={22}
            height={22}
            alt="hiddeneye"
          />
        </div>
        <div className="flex flex-col relative">
          <label>Нууц үг</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="Нууц үг"
            type={!verificationShow ? "password" : "text"}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, verification: e.target.value }))
            }
            value={info.verification}
          />
          <Image
            src="/eyehide.png"
            className="absolute right-4 bottom-3 cursor-pointer"
            onClick={() => setVerificationShow((prev) => !prev)}
            width={22}
            height={22}
            alt="hiddeneye"
          />
        </div>
        {error && <h1 className="text-red-400">{error}</h1>}
        <button
          disabled={!info.password || !info.verification || loading}
          className={`greenbutton mt-12 border-2 py-4`}
        >
          Солих
        </button>
      </form>
    </div>
  );
}

export default Stagethree;

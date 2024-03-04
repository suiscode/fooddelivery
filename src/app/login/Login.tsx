"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Login() {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(info.email, info.password);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-[448px] p-8">
      <h1 className="font-bold text-[28px]">Нэвтрэх</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <div className="flex flex-col">
          <label>Имэйл</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="Нууц үг"
            type="email"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            value={info.email}
          />
        </div>
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
            className="absolute right-4 bottom-9 cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
            width={22}
            height={22}
            alt="hiddeneye"
          />
          <Link className="self-end" href="/forgot">
            Нууц үг сэргээх
          </Link>
        </div>
        <button
          disabled={!info.email || !info.password || loading}
          className={`greenbutton mt-12 border-2 py-4`}
        >
          Нэвтрэх
        </button>
      </form>
      <div className="flex flex-col gap-8 w-full items-center ">
        <h2>Эсвэл</h2>
        <Link
          className="border-2 border-green-400 hover:bg-green-300 w-full py-4 justify-center flex"
          href="/signup"
        >
          Бүртгүүлэх
        </Link>
      </div>
    </div>
  );
}

export default Login;

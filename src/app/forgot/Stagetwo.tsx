"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Stagetwo({ email, setStage, code }: any) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [verficationCode, setVerificationCode] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (code != verficationCode) {
      setLoading(false);
      setError("Wrong code");
      return;
    }

    setLoading(false);
    setStage(3);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-[448px] p-8">
      <h1 className="font-bold text-[28px]">Нууц үг сэргээх</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <h1>
          Таны <span className="text-green-400">{email}</span> хаяг руу сэргээх
          код илгээх болно.{" "}
        </h1>
        <div className="flex flex-col relative">
          <label>Нууц үг сэргээх код</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="*********"
            type={show ? "number" : "password"}
            onChange={(e) => setVerificationCode(e.target.value)}
            value={verficationCode}
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
        {error && <h1 className="text-red-400">{error}</h1>}
        <button
          disabled={!email || loading}
          className={`greenbutton mt-12 border-2 py-4`}
        >
          Үргэлжлүүлэх
        </button>
      </form>
    </div>
  );
}

export default Stagetwo;

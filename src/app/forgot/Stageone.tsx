"use client";
import axios from "axios";
import React, { useState } from "react";

function Stageone({ setStage, email, setEmail, setCode }: any) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/forgot", {
        email: email,
      });
      setCode(response.data);
      setStage(2);
    } catch (e: any) {
      setError(e.response.data);
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center gap-8 w-[448px] p-8">
      <h1 className="font-bold text-[28px]">Нууц үг сэргээх</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <div className="flex flex-col">
          <label>Имэйл</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="Имэйл хаягаа оруулна уу"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        {error && <h1 className="text-red-400">{error}</h1>}
        <button
          disabled={!email || loading}
          className={`greenbutton mt-12 border-2 py-4`}
        >
          Нэвтрэх
        </button>
      </form>
    </div>
  );
}

export default Stageone;

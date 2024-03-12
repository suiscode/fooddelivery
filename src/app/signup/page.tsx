"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignupPage() {
  const router = useRouter()
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [showFirst, setShowFirst] = useState(false);
  const [showLast, setShowLast] = useState(false);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (info.password !== info.confirmPassword) {
      setError("Password does not match");
    }
    try {
      const response = await axios.post("/api/signup", {
        name: info.name,
        email: info.email,
        phoneNumber: info.phoneNumber,
        password: info.password,
      });
      router.push('/login')
      
    } catch (error: any) {
      setError(error.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-[448px] p-8">
      <h1 className="font-bold text-[28px]">Нэвтрэх</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <div className="flex flex-col">
          <label>Нэр</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="Нэрээ оруулна уу"
            type="text"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, name: e.target.value }))
            }
            value={info.name}
          />
        </div>
        <div className="flex flex-col">
          <label>И-мэйл</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="И-мэйл хаягаа оруулна уу"
            type="email"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            value={info.email}
          />
        </div>
        <div className="flex flex-col">
          <label>Утасны дугаар</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="Утасны дугаараа оруулна уу"
            type="text"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            value={info.phoneNumber}
          />
        </div>
        <div className="flex flex-col relative">
          <label>Нууц үг</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="Нууц үг оруулна уу"
            type={!showFirst ? "password" : "text"}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, password: e.target.value }))
            }
            value={info.password}
          />
          <Image
            src="/eyehide.png"
            className="absolute right-4 bottom-3 cursor-pointer"
            onClick={() => setShowFirst((prev) => !prev)}
            width={22}
            height={22}
            alt="hiddeneye"
          />
        </div>
        <div className="flex flex-col relative">
          <label>Нууц үг</label>
          <input
            className="bg-gray-100 rounded-md p-2 outline-none"
            placeholder="Нууц үг оруулна уу"
            type={!showLast ? "password" : "text"}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, confirmPassword: e.target.value }))
            }
            value={info.confirmPassword}
          />
          <Image
            src="/eyehide.png"
            className="absolute right-4 bottom-3 cursor-pointer"
            onClick={() => setShowLast((prev) => !prev)}
            width={22}
            height={22}
            alt="hiddeneye"
          />
        </div>
        {error && <h1 className="text-red-400">{error}</h1>}
        <div className="flex my-4">
          <input
            type="checkbox"
            id="myCheckbox"
            checked={agree}
            onChange={() => setAgree((prev) => !prev)}
          />
          <label htmlFor="myCheckbox">Үйлчилгээний нөхцөл зөвшөөрөх</label>
        </div>
        <button
          disabled={
            !info.name ||
            !info.password ||
            !info.phoneNumber ||
            !info.password ||
            !info.confirmPassword ||
            !agree
          }
          className={`greenbutton border-2 py-3 rounded-md`}
        >
          Нэвтрэх
        </button>
      </form>
    </div>
  );
}

export default SignupPage;

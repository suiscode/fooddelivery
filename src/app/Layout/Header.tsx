"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

function Header() {
  const pathname = usePathname();
  const [cookie, setCookie] = useState("");

  useEffect(() => {
    const cookieValue = Cookies.get("cookie");
    setCookie(cookieValue || "");
  }, [pathname]);

  const linkArray = [
    { title: "НҮҮР", href: "/" },
    { title: "ХООЛНЫ ЦЭС", href: "/menu" },
    { title: "ХҮРГЭЛТИЙН БҮС", href: "/delivery" },
  ];

  return (
    <div className="p-8 flex justify-between border-2 w-full">
      <div className="flex items-center gap-4">
        <Image src="./Logo.svg" width={40} height={40} alt="logo" />
        <div className="flex items-center gap-4">
          {linkArray.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`font-bold ${
                item.href === pathname && "text-green-500"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="border-2 rounded-lg border-black w-[260px]">
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Хайх"
            inputProps={{ "aria-label": "Хайх" }}
          />
        </div>
        <Link href="/cart" className="flex gap-2 cursor-pointer items-center">
          <ShoppingBasketOutlinedIcon className="w-[30px] h-[30px]" />
          <h1>Сагс</h1>
        </Link>
        <Link href={!cookie ? "/login" : "/profile"} className="flex gap-2 cursor-pointer items-center">
          <PermIdentityOutlinedIcon
            className={`w-[30px] h-[30px] ${!cookie ? "" : "text-green-400"}`}
          />
          {!cookie ? (
            <h1>Нэвтрэх</h1>
          ) : (
            <h1 className="text-green-400">Хэрэглэгч</h1>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;

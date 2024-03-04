"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const linkArray = [
    { title: "НҮҮР", href: "/" },
    { title: "ХООЛНЫ ЦЭС", href: "/menu" },
    { title: "ХҮРГЭЛТИЙН БҮС", href: "/delivery" },
  ];

  return (
    <div className="p-12">
      <div className="flex items-center gap-4">
        <Image src="./Logo.svg" width={40} height={40} alt="logo" />
        <div className="flex items-center gap-4">
          {linkArray.map((item) => (
            <Link
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
      <div></div>
    </div>
  );
}

export default Header;

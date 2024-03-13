import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  type linkType = {
    name: string;
    link: string;
  };

  const linkArray = [
    { label: "Нүүр", href: "/" },
    { label: "Холбоо барих", href: "" },
    { label: "Хоолны цэс", href: "/menu" },
    { label: "Үйлчилгээний нөхцөл", href: "/agreement" },
    { label: "Хүргэлтийн бүс", href: "" },
    { label: "Нууцлалын бодлого", href: "" },
  ];

  return (
    <div className="h-[545px] bg-[#18BA51] w-full relative items-center justify-center flex text-white">
      <Image src="/footerimage.png" layout="fill" alt="footer" />
      <div className="flex flex-col w-full px-32 py-28 items-center h-full justify-between z-10">
        <a href='/' className="flex items-center gap-4">
          <Image src="/logowhite.png" width={41} height={41} alt="logo" />
          <h1 className="text-xl font-semibold">Food Delivery</h1>
        </a>
        <ul className="flex justify-between w-full">
          {linkArray.map((item) => {
            return (
              <Link className="underline" key={crypto.randomUUID()} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </ul>
        <div className="flex gap-4 border-b-2 border-white w-full justify-center pb-12">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook color="white" className="w-10 h-10" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram color="white" className="w-10 h-10" />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <FaTwitter color="white" className="w-10 h-10" />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <h1>© 2024 Pinecone Foods LLC</h1>
          <h1>Зохиогчийн эрх хуулиар хамгаалагдсан.</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;

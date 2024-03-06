import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeBar({ label,link }: any) {
  return (
    <div>
      <div className="flex w-full justify-between items-center">
        <div className="flex w-full items-center">
          <Image src="/Star.png" width={32} height={32} alt="star" />
          <h1>{label}</h1>
        </div>
        <Link href={link} className="text-[#18BA51] w-[200px] flex items-center gap-4">
          Бүгдийг харах
          <Image src="/chevron.png" alt="chevron" width={6} height={6} />
        </Link>
      </div>
      <div>Data here</div>
    </div>
  );
}

export default HomeBar;

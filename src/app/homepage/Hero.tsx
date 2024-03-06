import Image from "next/image";
import React from "react";

function HeroPage() {
  return (
    <div className="w-full relative bg-[#18BA51] h-[788px]">
      <Image src="/hero.png" alt="hero" layout="fill" />
      <div className="w-full flex justify-evenly items-center gap-20 h-full">
        <div className="flex flex-col text-white w-1/4">
          <h1 className="text-[55px] font-semibold">Pinecone </h1>
          <h1 className="text-[55px] font-semibold border-b-2 mt-[-24px]">
            Food delivery
          </h1>

          <h1 className="text-[22px] font-medium">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
        </div>
        <Image src="/herofood.png" alt="herofood" width={588} height={438} />
      </div>
    </div>
  );
}

export default HeroPage;

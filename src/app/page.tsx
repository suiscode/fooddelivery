import Image from "next/image";
import type { AppProps } from "next/app";
import HeroPage from "./homepage/Hero";
import Homemenu from "./homepage/Homemenu";
import HomeBar from "./homepage/HomeBar";
import HomeSpecials from "./homepage/HomeSpecials";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center border-2 border-green-600 w-full gap-[120px]">
      <HeroPage />
      <Homemenu />
      <HomeSpecials />
    </div>
  );
}

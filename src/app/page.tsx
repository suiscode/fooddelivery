import Image from "next/image";
import type { AppProps } from "next/app";
import HeroPage from "./homepage/Hero";
import Homemenu from "./homepage/Homemenu";
import HomeBar from "./homepage/HomeBar";
import HomeSpecials from "./homepage/HomeSpecials";
import { Stack } from "@mui/material";

function Home() {
  return (
    <Stack alignItems={"center"} sx={{ width: "100%", gap: "120px" }}>
      <HeroPage />
      <Homemenu />
      <HomeSpecials />
    </Stack>
  );
}

export default Home;

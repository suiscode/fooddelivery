import Image from "next/image";
import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

function HeroPage() {
  return (
    <Stack sx={{ width: "100%", height: "575px", backgroundColor: "#18BA51", position:'relative'}}>
      <Image src="/hero.png" alt="hero" layout="fill" />
      <Stack
        sx={{
          width: "100%",
          height: "100%",
        }}
        alignItems="center"
        justifyContent="space-evenly"
        direction="row"
      >
        <Stack direction="column" color="white" sx={{ width: "25%" }}>
          <Typography sx={{ fontSize: "55px", fontWeight: "600" }}>
            Pinecone{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "55px",
              fontWeight: "600",
              marginTop: "-24px",
              borderBottom: "2px white solid",
            }}
          >
            Food delivery
          </Typography>

          <Typography sx={{ fontSize: "22px" }}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Image src="/herofood.png" alt="herofood" width={588} height={438} />
      </Stack>
    </Stack>
  );
}

export default HeroPage;

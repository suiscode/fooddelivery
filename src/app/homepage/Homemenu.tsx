import React from "react";
import Stack from "@mui/material/Stack";
import Homemenuper from "./Homemenuper";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";

function Homemenu() {
  return (
    <Stack
      justifyContent={"space-between"}
      direction={"row"}
      sx={{ width: "100%", paddingInline: "120px" }}
    >
      <Homemenuper
        title={"Хүргэлтийн төлөв хянах"}
        desc={"Захиалга бэлтгэлийн явцыг хянах"}
        img={<ImportContactsOutlinedIcon className="w-10 h-10 m-6 mb-10" />}
      />
      <Homemenuper
        title={"Шуурхай хүргэлт"}
        desc={"Захиалга бэлтгэлийн явцыг хянах"}
        img={<AccessTimeOutlinedIcon className="w-10 h-10 m-6 mb-10" />}
      />
      <Homemenuper
        title={"Эрүүл, баталгаат орц"}
        desc={"Захиалга бэлтгэлийн явцыг хянах"}
        img={<EggAltOutlinedIcon className="w-10 h-10 m-6 mb-10" />}
      />

      <Homemenuper
        title={"Хоолны өргөн сонголт"}
        desc={"Захиалга бэлтгэлийн явцыг хянах"}
        img={<ImportContactsOutlinedIcon className="w-10 h-10 m-6 mb-10" />}
      />
    </Stack>
  );
}

export default Homemenu;



import React from "react";
import Stack from "@mui/material/Stack";
import Homemenuper from "./Homemenuper";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";

function Homemenu() {
  return (
      <div className="flex justify-between w-full px-[120px]">
        <Homemenuper
          title={"Хүргэлтийн төлөв хянах"}
          desc={"Захиалга бэлтгэлийн явцыг хянах"}
          img={<ImportContactsOutlinedIcon className="w-10 h-10 m-6 mb-10" />}
        />
        <Homemenuper
          title={"Хүргэлтийн төлөв хянах"}
          desc={"Захиалга бэлтгэлийн явцыг хянах"}
          img={<AccessTimeOutlinedIcon className="w-10 h-10 m-6 mb-10" />}
        />
        <Homemenuper
          title={"Хүргэлтийн төлөв хянах"}
          desc={"Захиалга бэлтгэлийн явцыг хянах"}
          img={<EggAltOutlinedIcon className="w-10 h-10 m-6 mb-10" />}
        />

        <Homemenuper
          title={"Хүргэлтийн төлөв хянах"}
          desc={"Захиалга бэлтгэлийн явцыг хянах"}
          img={<ImportContactsOutlinedIcon className="w-10 h-10 m-6 mb-10" />}
        />
      </div>
  );
}

export default Homemenu;

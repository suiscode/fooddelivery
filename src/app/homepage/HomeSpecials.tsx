import React from "react";
import HomeBar from "./HomeBar";

function HomeSpecials() {
  return (
    <div className="flex flex-col w-full px-[120px]">
      <HomeBar label={"Хямдралтай"} link={"/"} />
      <HomeBar label={"Үндсэн хоол"} link={"/"} />
      <HomeBar label={"Салад ба зууш"} link={"/"} />
      <HomeBar label={"Амттан"} link={"/"} />
    </div>
  );
}

export default HomeSpecials;

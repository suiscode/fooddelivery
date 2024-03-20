import { Stack } from "@mui/material";
import React from "react";
import MenuCategory from "./MenuCategory";
import FoodContainer from "./FoodContainer";
// import { useSearchParams } from "next/navigation";
import { fetchCategory } from "@/app/utils";

type SearchPageType = {
  searchParams: { category: string };
};

async function MenuPage({ searchParams }: SearchPageType) {
  const q = searchParams?.category || "";
  console.log(q, 'query');

  const categories: any = await fetchCategory();

  return (
    <Stack spacing={2} width={"100%"} px={"110px"} className="min-h-[800px]">
      <Stack direction={"row"} spacing={2} py={"32px"}>
        {categories.map((category: string, index: number) => (
          <MenuCategory
            key={index}
            category={JSON.parse(JSON.stringify(category))}
          />
        ))}
      </Stack>
      <FoodContainer q={q}/>
    </Stack>
  );
}

export default MenuPage;

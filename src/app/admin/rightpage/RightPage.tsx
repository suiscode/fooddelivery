import { Stack, Typography } from "@mui/material";
import React from "react";
import FoodCard from "@/app/components/FoodCard";
import CreateButton from "./CreateButton";
import { fetchAllFood, fetchFoodByCategory } from "@/app/utils";

async function RightPage({ q, category }: any) {
  let foodData;

  if (q) {
    const { foodId } = await fetchFoodByCategory(q);
    foodData = foodId;
  } else {
    foodData = await fetchAllFood();
  }
  interface Food {
    _id: string;
    foodName: string;
    foodImage: string;
    foodOnSale: boolean;
    foodRecipe: string;
    foodSalePrice: number;
    foodPrice: number;
  }

  return (
    <Stack width={"80%"} border={"2px solid green"} p={4} spacing={4}>
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Typography variant="h6" className="font-bold">
          {q}
        </Typography>
        <CreateButton category={JSON.parse(JSON.stringify(category))} />
      </Stack>
      <div className="flex gap-10 flex-wrap">
        {foodData.map((item: Food) => (
          <FoodCard
            key={item._id}
            item={JSON.parse(JSON.stringify(item))}
            size={"30%"}
          />
        ))}
      </div>
    </Stack>
  );
}

export default RightPage;

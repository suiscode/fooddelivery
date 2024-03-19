import React from "react";
import FoodCard from "../components/FoodCard";
import { Stack } from "@mui/material";
import { fetchAllFood, fetchFoodByCategory } from "../utils";

async function FoodContainer({ q }: any) {
  let foodData;

  if (q) {
    const { foodId } = await fetchFoodByCategory(q);
    foodData = foodId;
  } else {
    foodData = await fetchAllFood();
  }
  console.log(foodData);

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
    <Stack>
      <div className="flex gap-4 flex-wrap">
        {foodData.map((item: Food) => (
          <FoodCard key={item._id} item={JSON.parse(JSON.stringify(item))} size={"24%"} />
        ))}
      </div>
    </Stack>
  );
}

export default FoodContainer;

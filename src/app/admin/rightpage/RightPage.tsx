"use client";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateNewFood from "./CreateNewFood";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import FoodCard from "@/app/components/FoodCard";
import Loading from "@/app/components/Loading";
import NoFoodIndicator from "@/app/components/NoFoodIndicator";

function RightPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  const searchParams = useSearchParams();
  const queryParam = searchParams.get("category");

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const fetchFood = async () => {
    try {
      setLoading(true);
      if (!queryParam) {
        return;
      }
      const res = await axios.get(`/api/food?category=${queryParam}`);
      console.log(res);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, [queryParam, refetch]);

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
          {queryParam}
        </Typography>
        <button
          onClick={handleOpen}
          className="bg-[#18BA51] text-white rounded-md px-3 py-2 hover:bg-opacity-90"
        >
          Add new food
        </button>
        <CreateNewFood
          setOpen={setOpen}
          open={open}
          refetch={refetch}
          setRefetch={setRefetch}
        />
      </Stack>

      {loading ? (
        <Loading />
      ) : (
        <div className="flex gap-10 flex-wrap">
          {data.map((item: Food) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </Stack>
  );
}

export default RightPage;

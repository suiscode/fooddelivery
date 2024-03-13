import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import FoodCard from "../components/FoodCard";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { Stack } from "@mui/material";

function FoodContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const queryParam = searchParams.get("category");

  useEffect(() => {
    fetchFood();
  }, [queryParam]);

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
      {loading ? (
        <Loading />
      ) : (
        <div className="flex gap-4 flex-wrap">
          {data.map((item: Food) => (
            <FoodCard key={item._id} item={item} size={"24%"} />
          ))}
        </div>
      )}
    </Stack>
  );
}

export default FoodContainer;

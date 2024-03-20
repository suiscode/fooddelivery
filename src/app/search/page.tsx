import { Stack } from "@mui/material";
import FoodCard from "../components/FoodCard";

interface FoodArray {
  foodName: string;
  foodImage: string;
  foodRecipe: string;
  foodSalePrice?: number;
  foodPrice: string;
  foodOnSale: boolean;
}

type SearchPageType = {
  searchParams: { query: string };
};

const searchData = async (query: string) => {
  const response = await fetch(
    `http://localhost:3000/api/search?query=${query}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  return response.json();
};

async function Page({ searchParams }: SearchPageType) {
  const { query } = searchParams;

  const data = await searchData(query);
  console.log(data);

  return (
    <Stack direction={'row'} className="flex-wrap gap-10" border={2} width={'100%'} height={'100%'} px={'120px'} py={'48px'}>
      {data.map((item: FoodArray) => (
        <FoodCard item={item} key={crypto.randomUUID()} size={'20%'}/>
      ))}
    </Stack>
  );
}

export default Page;

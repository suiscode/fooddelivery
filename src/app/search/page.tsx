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
  //   search = param || "";

  //   useEffect(() => {
  //     const fetchFoods = async () => {
  //       try {
  //         const res = await axios.get("/api/search?query=22");
  //         console.log(res);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };
  //     fetchFoods();
  //   }, [param]);

  return <div>sss</div>;
}

export default Page;

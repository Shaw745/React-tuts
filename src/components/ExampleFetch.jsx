import { useEffect, useState } from "react";

export const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, isError };
};

import { useGetData } from "./useGetData";

const url = "https://dummyjson.com/products";
const ExampleFetch = () => {
  const { isError, isLoading, data } = useGetData(url);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h1>Error occured while fetching data</h1>;
  }

  return (
    <div>
      <h1>List Of Products</h1>
    </div>
  );
};

export default ExampleFetch;

//products [] -fetch req to the api->  product(api)
// loading true ---------> false
// error false --------> true

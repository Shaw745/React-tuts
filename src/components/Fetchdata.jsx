import React from "react";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

const url = "https://dummyjson.com/products";
const Fetchdata = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products);
      setIsLoading(false);
      setProducts(data.products);
    };
    getProducts();
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <SyncLoader color="#ff0000" />
      </div>
    );
  }
  return (
    <div>
      <h1>List of Products</h1>
      <section className=" flex items-center gap-2.5 flex-wrap">
        {products.map((product) => {
          const {
            id,
            title,
            price,
            images,
            stock,
            warrantyInformation,
            rating,
          } = product;
          return (
            <div key={id} className=" max-w-[320px] shadow-md w-full h-[70%]">
              <img
                src={images[0]}
                alt={title}
                className="h-[80%] object-cover"
              />
              <p className="text-lg">{title}</p>
              <div className="flex gap-2.5 items-center">
                <p className="text-2xl font-bold">${price}</p>
                <p className={stock >= 30 ? "text-green-400" : "text-red-400"}>
                  {" "}
                  {stock} left in stock{" "}
                </p>
              </div>
              <p>{warrantyInformation}</p>
              <p>{rating}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Fetchdata;

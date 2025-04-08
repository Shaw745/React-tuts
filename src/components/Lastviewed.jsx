import React from "react";
import Mystoresingleproduct from "./Mystoresingleproduct";

const Lastviewed = () => {
  const topProducts = [
    {
      id: 1,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/8523401/1.jpg?1668",
      title: "Nivea Radiant Beauty",
      price: 8800,
    },
    {
      id: 2,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/5008893/1.jpg?2631",
      title: "Ashluxe Nigeria",
      price: 32500,
    },
    {
      id: 3,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/8487963/1.jpg?7909",
      title: "Ace Intel Laptop",
      price: 350000,
    },
  ];

  return (
    <div className="max-w-[1300px] mx-auto mt-6">
      <div className="bg-orange-500 text-3xl font-bold p-5 text-center rounded-t-2xl text-white ">
        <h1>Last Viewed </h1>
      </div>
      <section className="flex gap-2.5 items-center">
        {topProducts.map((product) => {
          return <Mystoresingleproduct key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Lastviewed;

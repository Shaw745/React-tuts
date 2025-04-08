import React from "react";

const Singleproduct = ({ image, price, title }) => {
  return (
    <div>
      <img src={image} alt={title} className="h-[300px] object-fit" />
      <p className="text-xl font-medium">{title} </p>
      <p className="text-2xl font-bold">${price}</p>
    </div>
  );
};

const Jumiaclone = () => {
  return (
    <div>
      <h1 className="font-extrabold w-[100%] text-2xl">All Products</h1>
      <div className="flex gap-3">
        <Singleproduct
          image={
            "https://pictures-nigeria.jijistatic.net/25297483_5c46d573672b2_300x300.jpg"
          }
          price={165000}
          title={"Hisense Tv"}
        />
        <Singleproduct
          image={
            "https://pictures-nigeria.jijistatic.net/156151844_MzAwLTMwMC0wNWFiMmU3OGMy.webp"
          }
          price={75000}
          title={"Quality Wardrobe"}
        />
        <Singleproduct
          image={
            "https://pictures-nigeria.jijistatic.net/71414142_MzAwLTIwNC0zMDY4MjcyOWIx.webp"
          }
          price={465000}
          title={"Nutri Naija blender"}
        />
      </div>
    </div>
  );
};

export default Jumiaclone;

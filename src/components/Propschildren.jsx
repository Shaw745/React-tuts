import React from "react";

const Product = ({ image, price, title, children }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{title}</p>
      <p>#{price}</p>
      {children}
    </div>
  );
};

const Propschildren = () => {
  return (
    <div>
      <h1>List of Avaiable Items</h1>
      <div className="flex gap-3">
        <Product
          image={
            "https://pictures-nigeria.jijistatic.net/122479773_MzAwLTMwMC03M2QzMjk1M2Iy.webp"
          }
          price={"20500"}
          title={"Liquid lipstick"}
        />

        <Product
          image={
            "https://pictures-nigeria.jijistatic.net/165199159_MzAwLTI4MC1kNmY2ZDhhZTVm.webp"
          }
          price={"3500"}
          title={"Grass Rug"}
        />
        <Product
          image={
            "https://pictures-nigeria.jijistatic.net/71414142_MzAwLTIwNC0zMDY4MjcyOWIx.webp"
          }
          price={465000}
          title={"Nutri Naija blender"}
        >
          <p className="bg-red-700 text-2xl font-bold">Black friday Deal </p>
        </Product>
      </div>
    </div>
  );
};

export default Propschildren;

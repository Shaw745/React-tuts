import React from "react";

const Simplelist = () => {
  const customers = ["Ade", "John", "Peter"];
  const users = ['shaw','jason','bryan','james','william'];
  return (
    <div>
      <h1>Outputting List </h1>
      <div>
        {customers.map((customer, index) => {
          return <p key={index}>{customer}</p>;
        })}
      </div>
      <div>
        {users.map((user,index)=>{
          return <h1 className="text-green-600 font-bold text-2xl  capitalize" key={index}>{user}</h1>
        })}
      </div>
    </div>
  );
};

export default Simplelist;

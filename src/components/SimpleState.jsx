import React from "react";
import { useState } from "react";

const SimpleState = () => {
  const [name, setName] = useState("Declan");
  const handleNameChange = () => {
    if (name == "Declan") {
      setName("Saka");
    } else {
      setName("Declan");
    }
  };
  const [num, setNum] = useState(0);
  const handleIncrease = () => {
    setNum(num + 1);
  };
  const handleDecrease = () => {
    setNum(num - 1);
  };
  const details = `The Ballon d'Or stands as the most prestigious individual honor in
          football, awarded to the player deemed the best in the world for the
          calendar year. Big names like Messi or Cristiano Ronaldo stand out
          when the Ballon d'Or comes to mind, but what about those players who
          got close but to no avail? `;

  const [show, setShow] = useState(false);
  const handleShowDetails = () => {
    setShow(!show);
  };
  return (
    <div className="py-10 text-center">
      <h1 className="text-3xl font-bold"> UseState 1</h1>
      <p>My Name Is {name}</p>
      <button onClick={handleNameChange} className="mybtn"></button>
      <h1 className="text-4xl my-3.5">{num}</h1>
      <div className=" flex gap-3 justify-center">
        <button className="mybtn" onClick={handleIncrease}>
          Increase
        </button>
        <button className="mybtn" onClick={() => setNum(0)}>
          Reset
        </button>

        <button className="mybtn" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
      <div className="max-w-[600px] mx-auto p-3 shadow-lg">
        <h1 className="text-4xl font-bold">Top Football News</h1>
        <h2 className="text-2xl capitalize text-red-500 my-2">
          Madrid Demolished at the emirate stadium{" "}
        </h2>
        <p className="">
          {show ? details : details.substr(0, 100) + "....."}
        </p>
        <button onClick={handleShowDetails} className="text-blue-600">
          {show ? "show less": "show more"}
        </button>
      </div>
    </div>
  );
};

export default SimpleState;

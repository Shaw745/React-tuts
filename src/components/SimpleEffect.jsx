import React from "react";
import { useState, useEffect } from "react";

const SimpleEffect = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(20);
  useEffect(() => {
    console.log("Fetch Data");
  }, [num, count]);
  return (
    <div className="text-center">
      <h1 className="text-center text-3xl my-3">Use Effect Basics</h1>
      <h1 className="text-3xl ">{count}</h1>
      <button className="mybtn" onClick={() => setCount(count + 1)}>
        Change
      </button>
      <h1 className="text-3xl ">{num}</h1>
      <button className="mybtn" onClick={() => setNum(num + 1)}>
        Change
      </button>
    </div>
  );
};

export default SimpleEffect;

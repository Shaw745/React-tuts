import React from "react";

const Dynamic = () => {
    const myName = "John Doe";
  return (
    <div className="text-3xl text-center">
        <h1> Dynamic Values </h1>
        <p>My name is {myName} </p>
        <p>{1+1}</p>
    </div>
  )
}

export default Dynamic
import React from "react";

const Button = ({content, bg}) => {

  return <button className={`${bg} text-white mx-4 rounded-lg w-[200px] h-[40px]`}
  >{content}</button>;
};

const Props = () => {
  return (
    <div>
      <h1>Props</h1> 
      <Button content={"sign up"} bg={"bg-black"} />
      <Button content={"continue with google"} bg={"bg-red-200"} />
      <Button content={"proceed"} bg={"bg-amber-400"} />
      <Button content={"Register"} bg={"bg-blue-600"} />
      <Button content={"log in "} bg={"bg-green-200"} />
    </div>
  );
};

export default Props;

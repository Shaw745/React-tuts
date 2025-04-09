import React from "react";

const EventHanding = () => {
  const handleclick = () => {
    alert("welcome user");
  };
  const handleClickAgain = (name) => {
    alert(`welcome ${name}`);
  };
  return (
    <div className="text-center py-10 ">
      <h1 className="text-3xl mb-4">Responding to user Interactions </h1>
      <button onClick={handleclick} className="mybtn">
        
        click me
      </button>
      <button onClick={() => handleClickAgain("John")} className="mybtn ml-3">
        {" "}
        Click Again
      </button>
    </div>
  );
};

export default EventHanding;

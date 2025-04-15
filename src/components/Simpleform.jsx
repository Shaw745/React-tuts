import React, { useState } from "react";
import { useState } from "react";

const Simpleform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium">Submit Name</h1>
        <input
          type="text"
          placeholder="First Name"
          className="rounded-md p-2 w-full border border-black my-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="rounded-md p-2 w-full border border-black my-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="mybtn ml-[30%] ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Simpleform;

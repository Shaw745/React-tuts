import React from "react";
import { useState } from "react";
const Simpleform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      //display error message
      setError("please fill all the field");
      return;
    }
    setUsers([...users, { firstName, lastName }]);
    setFirstName("");
    setLastName("");
    setError("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium">Submit Name</h1>
        <p className="text-red-500">{error}</p>
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
        {users.length > 0 && (
          <div className="myform">
            <h1>List of users</h1>
            {users.map((user, index) => {
              return (
                <p key={index}>
                  {user.firstName}
                  {user.lastName}
                </p>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
};

export default Simpleform;

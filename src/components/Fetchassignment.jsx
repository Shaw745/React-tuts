import React from "react";

import { SyncLoader } from "react-spinners";

import { useFetch } from "../hooks/usefetch";

const url = "https://dummyjson.com/users";

const Fetchassignment = () => {
  const {
    isLoading,
    data: { users },
  } = useFetch(url);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <SyncLoader color="#ff0000" />
      </div>
    );
  }
  return (
    <div>
      <h1>Names of Users</h1>
      <section className=" flex items-center gap-2.5 flex-wrap">
        {users.map((User) => {
          const { id, firstName, lastName, image, gender, address } = User;
          return (
            <div key={id} className=" max-w-[320px] shadow-md w-full h-[70%]">
              <img
                src={image}
                alt={firstName + lastName}
                className="h-[80%] object-cover"
              />
              <p className="text-lg">{firstName + " " + lastName}</p>
              <p className="text-2xl font-bold">{gender}</p>
              <p>{`${address.address}, ${address.city}, ${address.state}`}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Fetchassignment;

import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState(false);
  const userLoggedin = () => {
    setUser(!user);
  };

  return (
    <>
      {!user ? (
        <div className="text-center">
          <h1>User Not logged in</h1>
          <button onClick={userLoggedin} className="mybtn mb-2">
            Log in
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1> Welcome To your DashBoard </h1>
          <button onClick={() => setUser(false)} className="mybtn">
            Log out
          </button>
        </div>
      )}
    </>
  );
};

export default User;

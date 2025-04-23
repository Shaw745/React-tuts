import React from "react";
import { Link } from "react-router-dom";

const Singletweet = () => {
  return (
    <div className=" max-w-[300px] mx-auto w-full items-center flex flex-col justify-center mt-10">
      <Link to="/timeline" className="btn btn-primary mb-4 ">
        Back to Timeline
      </Link>
    </div>
  );
};

export default Singletweet;

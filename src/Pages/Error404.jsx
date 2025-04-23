import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl ">404</h1>
      <h2 className="text-2xl">Page Not Found</h2>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <a className="btn btn-primary mt-4" href="/">
        Go back to Home
      </a>
      <p className="btn btn-primary mt-4"> 
        Or check out our <a href="/store">Store</a>
      </p>
    </div>
  );
};

export default Error404;

import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-black text-white h-screen max-h-[600-px]">
      <div className="container h-full flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-[600px]">
          <h1 className="text-2xl md:text-4xl">Buy Luxury Cars</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nostrum sit aspernatur nam laborum quae nisi doloremque
            exercitationem ipsum eligendi. Veritatis accusamus nemo laboriosam
            cum?
          </p>
          <button className="bg-white text-black rounded-sm h-[40px] w-[120px] cursor-pointer">
            shop now
          </button>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1661645051185-dd1c6453e22c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBjYXJ8ZW58MHx8MHx8fDA%3D"
          alt="small car"
          className="rounded-md w-[350px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { useState } from "react";



const films = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1702308954905-341065817003?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERpZSUyMEhhcmQlMjBtb3ZpZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "mission Impossible 1",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1683740128021-effcc3f70ef9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGllJTIwSGFyZCUyMG1vdmllfGVufDB8fDB8fHww",
    title: "Die Hard",
  },
  {
    id: 3,
    image:
      " https://images.unsplash.com/photo-1739433438426-9262aeef2bf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGllJTIwSGFyZCUyMG1vdmllfGVufDB8fDB8fHww",
    title: "Mortal Kombat",
  },
];
const ExampleArray = () => {
  const [movies, setMovies] = useState([]);
  if (movies.length === 0) {
    return (
      <div className="w-full max-w-[400px] mx-auto my-4 p-2.5 text-center shadow-2xl ">
        <h1>No Movies Found </h1>
        <button onClick={() => setMovies(films)} className="mybtn">
          Get Movies{" "}
        </button>
      </div>
    );
  }
  return (
    <div>
      <h1 className="my-4 font-bold text-3xl">Movies Available</h1>
      <section className="flex gap-3">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="w-full max-w-[300px]">
              <img
                src={movie.image}
                alt="title"
                className="w-full object-cover h-[200px]"
              />
              <p>{movie.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ExampleArray;

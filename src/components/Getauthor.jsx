import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { useFetch } from "../hooks/usefetch";

const url = "https://example-data.draftbit.com/authors?_limit=10";
const Getauthor = () => {
    const{isLoading, data:authors}= useFetch(url)
 
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <SyncLoader color="#ff0000" />
      </div>
    );
  }
  return (
    <div>
      <h1> Names of Authors </h1>
      <section >
        <div className=" flex    gap-2.5 flex-wrap border rounded-3xl">
          {authors.map((author) => {
            const { id, imgUrl, person, professions, description } = author;
            return (
              <div key={id} className=" max-w-[320px] shadow-md w-full">
                <img src={imgUrl} alt={person} className="h-60 object-cover" />
                <p className="text-lg">{person}</p>
                <p className="text-2xl font-bold">{professions}</p>
                <p>{description}</p>
                <a href={author.sourceUrl} target="_blank">
                  Read more
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Getauthor;

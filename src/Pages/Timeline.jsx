import React from "react";
import { tweets } from "../data";
import { Link } from "react-router-dom";

const Timeline = () => {
  return (
    <div>
      <section className="flex gap-5 ">
        <div className="w-[300px] border border-secondary p-3">
          <h1 className="text-3xl font-bold"> Trending Topics</h1>
          <ol className="list-decimal list-inside">
            <li className="text-xl font-bold">Sports</li>
            <li className="text-xl font-bold"> Technology</li>
            <li className="text-xl font-bold"> Health Talk</li>
            <li className="text-xl font-bold"> Football</li>
          </ol>
        </div>
        <div className="w-[600px] border border-secondary p-3">
          <h1 className="text-3xl font-bold"> Timeline</h1>

          <section className="flex flex-col gap-3">
            {tweets.map((singletweet) => {
              const { id, profileName, handle, tweet, likes, comments,retweets } =
                singletweet;
              return (
                <div key={id} className="border-y-2 border-gray-400 p-2">
                  <div className="flex gap-2 items-center">
                    <h1 className="text-2xl font-bold">{profileName}</h1>
                    <span className="text-gray-300">{handle}</span>
                  </div>
                  <p className="my-2">{tweet}</p>
                  <div className="flex gap-3 items-center">
                    <p>{likes}likes</p>
                    <p>{comments.length} comments</p>
                    <p>{retweets} retweets</p>
                    <div>
                        <Link to={`/timeline/${id}`}> Read More  </Link>
                    </div>
                  </div>
                </div>
              );
            })}
                  
          </section>
        </div>

        <div className="w-[300px] border border-secondary p-3">
          <h1 className="text-3xl font-bold"> Popular Tags</h1>
          <p className="text-gray-300"> @johndoe</p>
          <p className="my-3">Frontend Developer</p>
          <input type="text" placeholder="Search For User" className="input" />
        </div>
      </section>
    </div>
  );
};

export default Timeline;

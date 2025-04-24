import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { tweets } from "../data";

const Singletweet = () => {
  const { id } = useParams();
  const tweet = tweets.find((singleTweet) => singleTweet.id === id);
  return (
    <div className=" max-w-[300px] mx-auto w-full items-center flex flex-col justify-center mt-10">
      <Link to="/timeline" className="btn btn-primary mb-4 ">
        Back to Timeline
      </Link>
      <div className="mt-5">
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl font-bold">{tweet.profileName}</h1>
          <span className="text-gray-300">{tweet.handle}</span>
        </div>
        <p className="my-2">{tweet.tweet}</p>

        <div className="flex gap-3">
          <p>{tweet.likes} likes</p>
          <p>{tweet.comments.length} comments</p>
          <p>{tweet.retweets} retweets</p>
        </div>
        <h1 className=" font-bold">Comments</h1>
        <div className="flex flex-col gap-2 mt-3">
          {tweet.comments.map((comment, i) => {
            return <p key={i}> {comment}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Singletweet;

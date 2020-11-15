import React from "react";
import Post from "../Components/Post";
import NewsDate from "../data/date.json";

export default function News() {
  return (
    <div>
      <h1>The latest News:</h1>
      {NewsDate.news.map((post, index) => {
        return <Post id={index} />;
      })}
    </div>
  );
}

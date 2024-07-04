import Post from "./Post";
import tweets from "../Tweets";
import "./PostList.css";
import { useState } from "react";
import Tweetpost from "../Tweetpost";

export default function PostList({ kullanici }) {
  const [tweetList, setTweetList] = useState(tweets);
  const addTweet = (content) => {
    const newTweet = {
      id: tweetList.length + 1,
      isim: kullanici.isim,
      kullanici: kullanici.kullanici,
      personPhoto: "https://picsum.photos/200/305",
      content: content,
    };
    setTweetList([newTweet, ...tweetList]);
  };

  return (
    <div>
      <div className="home-nav">
        <h3>Senin için</h3>
        <h3>Takip ettiklerin</h3>
      </div>
      <Tweetpost addTweet={addTweet} />
      <div className="postlar">
        {tweetList.map((tweet) => (
          <Post key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

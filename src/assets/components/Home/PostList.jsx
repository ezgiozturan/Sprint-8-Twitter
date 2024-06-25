import Post from "./Post";
import tweets from "../Tweets";
import "./PostList.css";
import { useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

export default function PostList() {
  const { tweet, setTweet } = useState();

  const handleChange = (e) => {};
  return (
    <div>
      <div className="home-nav">
        <h3>Senin için</h3>
        <h3>Takip ettiklerin</h3>
      </div>
      <form>
        <textarea
          value={tweet}
          placeholder="Neler oluyor?!"
          maxLength="280"
          rows="5"
          cols="50"
          onChange={handleChange}
        ></textarea>
        <div className="text-footer">
          <div className="tweet-sembol">
            <GoFileMedia />
            &nbsp;&nbsp;
            <MdOutlineGifBox />
            &nbsp;&nbsp;
            <BiPoll />
            &nbsp;&nbsp;
            <BsEmojiSmileUpsideDown />
            &nbsp;&nbsp;
            <RiCalendarScheduleLine />
            &nbsp;&nbsp;
            <CiLocationOn />
          </div>
          <button className="btn-tweet">Post</button>
        </div>
      </form>
      <div className="postlar">
        {tweets.map((tweet) => (
          <Post key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

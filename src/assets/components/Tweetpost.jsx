import { TiWeatherCloudy } from "react-icons/ti";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import axios from "axios";
import formData from "./Signup/SignUp.jsx";
export default function Tweetpost({ addTweet, setKullanici }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === "") return;
    addTweet(content);
    setContent("");
    axios
      .post("https://reqres.in/api/twitter", formData)
      .then((response) => {
        console.log(response);
        setKullanici(formData);
        history.push("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
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
    </div>
  );
}

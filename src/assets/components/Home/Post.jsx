import React from "react";
import "./Post.css";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { RiShare2Fill } from "react-icons/ri";

const Post = ({ tweet }) => {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <img src={tweet.personPhoto} className="circle-img" />
        <span className="person">{tweet.person}</span>
        <span className="username">@{tweet.kullanici}</span>
      </div>
      <div className="tweet-content">
        <p>{tweet.content}</p>
      </div>
      <div className="container-icons">
        <div className="icons">
          <FaRegComment className="icon" />
          {Math.floor(Math.random() * 100)}
        </div>
        <div className="icons">
          <BiRepost className="icon" />
          {Math.floor(Math.random() * 100)}
        </div>
        <div className="icons">
          <FcLikePlaceholder className="icon" />
          {Math.floor(Math.random() * 100)}
        </div>
        <div className="icons">
          <IoStatsChartOutline className="icon" />
          {Math.floor(Math.random() * 100)}
        </div>
        <div className="icons">
          <FaRegBookmark className="icon" />
          <RiShare2Fill className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Post;

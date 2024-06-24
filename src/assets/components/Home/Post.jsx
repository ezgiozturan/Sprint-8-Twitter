import React from "react";

const Post = ({ tweet }) => {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <img
          src={tweet.personPhoto}
          alt={`${tweet.person} profile`}
          className="profile-photo"
        />
        <div>
          <span className="person">{tweet.person}</span>
          <span className="username">@{tweet.kullanici}</span>
        </div>
      </div>
      <div className="tweet-content">
        <p>{tweet.content}</p>
        {tweet.photo && (
          <img src={tweet.photo} alt="Tweet content" className="tweet-photo" />
        )}
      </div>
    </div>
  );
};

export default Post;

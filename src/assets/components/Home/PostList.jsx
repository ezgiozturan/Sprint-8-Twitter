import Post from "./Post";
import tweets from "../Tweets";
import "./PostList.css";
export default function PostList() {
  return (
    <div className="postlar">
      {tweets.map((tweet) => (
        <Post key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

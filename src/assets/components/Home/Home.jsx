import Navigation from "./Navigation";
import RigthSideBar from "./RigthSideBar";
import PostList from "./PostList";
import "./Home.css";

export default function Home({ kullanici }) {
  return (
    <div>
      <div className="container">
        <div className="section section-left">
          <Navigation kullanici={kullanici} />
        </div>
        <div className="section section-middle">
          <PostList kullanici={kullanici} />
        </div>
        <div className="section section-right">
          <RigthSideBar />
        </div>
      </div>
    </div>
  );
}

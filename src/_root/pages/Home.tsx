import Loader from "@/components/shared/Loader";
import React from "react";

const Home = () => {
  const isPostloading = true;
  const posts = null;

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostloading && !posts ? <Loader /> : <ul></ul>}
        </div>
      </div>
    </div>
  );
};

export default Home;

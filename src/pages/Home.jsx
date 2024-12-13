import React, { useEffect, useState } from "react";

import appwriteService from "../appwrite/config";
import { PostCard } from "../components";
import { useSelector } from "react-redux";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Only fetch posts if the user is authenticated
    
      appwriteService.getPosts().then((posts) => {
        if (posts && posts.documents) {
          console.log(posts.documents);
          setPosts(posts.documents); // Set the posts after fetching
        }
      });
    
  }, []);

  if (authStatus && posts.length === 0) {
    return (
      <div className="text-lg mx-5 md:text-3xl lg:text-4xl sm:2xl   min-h-40 flex justify-center items-center my-14 sm:mx-0">
        No posts here yet. Be the first to share something! 💬
      </div>
    );
  } else if (!authStatus && posts.length >= 0) {
    return (
      <div className="flex justify-center items-center min-h-40 my-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-lg  md:text-3xl lg:text-4xl sm:2xl ">
        <div>Login to read posts</div>
      </div>
    );
  }
  return (
    <div className="w-full grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3  gap-5 sm:w-full   p-5 my-10">
      {posts.map((post) => (
        <div key={post.$id}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};

export default Home;

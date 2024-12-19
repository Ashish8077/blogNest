import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { PostCard } from "../components";
import { fetchPosts } from "../store/postSlice";
import { useDispatch, useSelector } from "react-redux";


const AllPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-black border-t-white border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 flex justify-center items-center min-h-screen">
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {posts?.map((post) => (
          <div key={post.$id} className="p-2 ">
            <PostCard key={post.$id} {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;

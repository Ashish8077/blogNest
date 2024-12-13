import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { PostCard } from "../components";


const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await appwriteService.getPosts();
        setPosts(fetchedPosts.documents);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        {posts?.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard key={post.$id} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;

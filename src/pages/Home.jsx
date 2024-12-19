import React, { useEffect} from "react";
import { PostCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/postSlice";


const Home = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Only fetch posts if the user is authenticated
    if (authStatus) {
      dispatch(fetchPosts());
    }
  }, [dispatch, authStatus]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-black border-t-white border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-red-500 flex justify-center items-center min-h-screen">
        <div>{error}</div>
      </div>
    );
  }

  if (authStatus && posts.length === 0) {
    return (
      <div className="text-lg mx-5 md:text-3xl lg:text-4xl sm:2xl   min-h-40 flex justify-center items-center my-14 sm:mx-0">
        No posts here yet. Be the first to share something! 💬
      </div>
    );
  } else if (!authStatus) {
    return (
      <div className="flex justify-center items-center min-h-40 my-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-lg  md:text-3xl lg:text-4xl sm:2xl ">
        <div>Login to read posts</div>
      </div>
    );
  }
  return (
    <div className="w-full p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 ">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

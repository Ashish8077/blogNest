import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="min-w-[100px] sm:min-w-[264px] md:min-w-[300px]  bg-[#171923] dark:bg-white text-white dark:text-black shadow-lg rounded-lg overflow-hidden transform hover:translate-y-[-5px] duration-300">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="max-h-[192px] w-full object-cover"
          />
        </div>
        <h2 className="text-base sm:text-xl pl-4 my-2  font-bold dark:text-[#1A202C]">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default PostCard;

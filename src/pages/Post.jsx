import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { CustomBtn } from "../components";
import parser from "html-react-parser";

const Post = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    appwriteService.getPost(slug).then((post) => {
      if (post) {
        setPost(post);
      } else navigate("/");
    });
  }, [slug, navigate]);

  const deletePost = () => {
    console.log(post.$id)
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <div className="w-11/12 mx-auto sm:flex sm:justify-center mb-4 relative border rounded-xl p-4">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="rounded-xl w-full h-auto object-cover"
        />
        {isAuthor && (
          <div className=" flex flex-col sm:flex-row gap-2 mt-5 sm:mt-0  sm:absolute sm:right-6 sm:top-6">
            <Link to={`/edit-post/${post.$id}`}>
              <CustomBtn bgColor="bg-green-500" className="mr-3 w-full">
                Edit
              </CustomBtn>
            </Link>
            <CustomBtn bgColor="bg-red-500" onClick={deletePost}>
              Delete
            </CustomBtn>
          </div>
        )}
      </div>
      <div className="w-11/12 mx-auto mb-6 ">
        <h1 className=" text-xl sm:text-2xl font-bold">{post.title}</h1>
      </div>
      <div className=" text-sm sm:text-lg w-11/12 mx-auto">
        {parser(post.content)}
      </div>
    </div>
  ) : null;
};

export default Post;

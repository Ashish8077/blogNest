import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import { PostForm } from "../components";


const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const fetchedPost = await appwriteService.getPost(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetch post", error.message);
      }
    };
    getPost();
  }, [slug, navigate]);

  return post ? (
    <div>
      <PostForm post={post} />
    </div>
  ) : null;
};

export default EditPost;

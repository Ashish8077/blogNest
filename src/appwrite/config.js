import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      if (!title || !slug || !content || !userId) {
        return { error: "Title, slug, content, and userId are required." };
      }
      const newPost = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.apperiteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      return { success: true, post: newPost };
    } catch (error) {
      console.error(`Error in creating Post: ${error}`);
      return {
        error:
          "An error occurred while creating the post. Please try again later.",
      };
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const updatedPost = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.apperiteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
      return { success: true, post: updatedPost };
    } catch (error) {
      console.error(`Error in updating Post: ${error}`);
      return {
        error:
          "An error occurred while updating the post. Please try again later.",
      };
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.apperiteCollectionId,
        slug
      );
      return { success: true, message: "Post deleted successfully." };
    } catch (error) {
      console.error(`Error in deleting Post: ${error}`);
      return {
        error:
          "An error occurred while deleting the post. Please try again later.",
      };
    }
  }

  async getPost(slug) {
    try {
      const post = this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.apperiteCollectionId,
        slug
      );
      return { success: true, post };
    } catch (error) {
      console.error(`Error in fetching post: ${error.message}`);
      return {
        error:
          "An error occurred while fetching the post. Please try again later.",
      };
    }
  }

  async getPosts(quries = Query.equal[("status", "active")]) {
    try {
      await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.apperiteCollectionId,
        quries
      );
    } catch (error) {
      console.error(`Error fetching posts: ${error}`);
      return {
        error:
          "An error occurred while fetching the posts. Please try again later.",
      };
    }
  }

  //Creating storage Services

  async uploadFile(file) {
    try {
      const fileDocument = await this.bucket.createFile(
        conf.apprriteBucketId,
        ID.unique(),
        file
      );
      return {
        success: true,
        file: fileDocument,
      };
    } catch (error) {
      console.error("Error uploading file:", error);
      return {
        error:
          "An error occurred while uploading the file. Please try again later.",
      };
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.apprriteBucketId, fileId);
      return { success: true, message: "File deleted successfully." };
    } catch (error) {
      console.error("Error deleting file:", error);
      return {
        error:
          "An error occurred while deleting the file. Please try again later.",
      };
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(conf.apprriteBucketId, fileId)
  }

}

const service = new Service();

export default service;

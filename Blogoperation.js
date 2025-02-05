const Blog = require('./Schema');

const createPost = async () => {
  try {
    const newPost = new Blog({
      title: "Introduction to Mongoose",
      content: "Mongoose is a powerful ODM library for MongoDB...",
      author: "JohnDoe",
      tags: ["MongoDB", "Mongoose", "NodeJS"]
    });

    const savedPost = await newPost.save();
    console.log("Blog post created:", savedPost);
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

createPost();

const getAllPosts = async () => {
    try {
      const posts = await Blog.find();
      console.log("All Blog Posts:", posts);
    } catch (error) {
      console.error("Error retrieving posts:", error);
    }
  };
  
  getAllPosts();

const updatePost = async (postId, updatedData) => {
    try {
      const updatedPost = await Blog.findByIdAndUpdate(
        postId,
        { ...updatedData, updatedAt: Date.now() },
        { new: true } // Returns the updated document
      );
  
      console.log("Post updated:", updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  
const deletePost = async (postId) => {
    try {
      await Blog.findByIdAndDelete(postId);
      console.log("Post deleted successfully.");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  



  
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { saveToStorage, loadFromStorage } from "../utils/storage";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = loadFromStorage("blogPosts");
    if (storedPosts) setPosts(storedPosts);
  }, []);

  const addPost = (newPost) => {
    const updated = [...posts, newPost];
    setPosts(updated);
    saveToStorage("blogPosts", updated);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlog = () => useContext(BlogContext);

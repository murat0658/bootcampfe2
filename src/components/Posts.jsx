import React, { useEffect, useState } from "react";
import axios from "axios";
import Frame from "./Frame";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const f = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };

  useEffect(() => {
    f();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Frame key={post.id}>
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Frame>
      ))}
    </div>
  );
}

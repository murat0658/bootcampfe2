import React, { useEffect } from "react";
import Frame from "./Frame";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, selector } from "../slice";

export default function Posts() {
  const { posts, loading } = useSelector(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <div>
      {loading && <div>Loading</div>}
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

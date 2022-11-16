import React from "react";
import Post from "./Post";

function Posts() {
  const posts = [
    <Post user="meowed" image="gato-telefone" like="respondeai" />,
    <Post user="barked" image="dog" like="adorable_animals" />
  ];
  return (
    <div class="posts">
      {posts.map((post) => (
        <div>{post}</div>
      ))}
    </div>
  )
}

export default Posts;
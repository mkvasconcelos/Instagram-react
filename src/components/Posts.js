import React from "react";
import Post from "./Post";

function Posts() {
  const posts = [
    { user: "meowed", image: "gato-telefone", like: "respondeai" },
    { user: "barked", image: "dog", like: "adorable_animals" },
  ];
  return (
    <div class="posts">
      {posts.map((p) => (
        <Post user={p.user} image={p.image} like={p.like} />
      ))}
    </div>
  );
}

export default Posts;

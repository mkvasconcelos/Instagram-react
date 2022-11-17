import React from "react";
import Post from "./Post";

export default function Posts() {
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

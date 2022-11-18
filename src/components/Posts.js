import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    { user: "meowed", image: "gato-telefone", like: "respondeai" },
    { user: "barked", image: "dog", like: "adorable_animals" },
  ];
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p.user} user={p.user} image={p.image} like={p.like} />
      ))}
    </div>
  );
}

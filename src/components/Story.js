import React from "react";

export default function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/${props.title}.svg`} />
      </div>
      <div class="usuario">{props.title}</div>
    </div>
  );
}

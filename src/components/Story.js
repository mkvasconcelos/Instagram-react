import React from "react";

export default function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={`assets/img/${props.title}.svg`} alt="story" />
      </div>
      <div className="usuario">{props.title}</div>
    </div>
  );
}

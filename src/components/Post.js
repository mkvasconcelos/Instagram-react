import React, { useState } from "react";

export default function Post(props) {
  const [unlike, setLike] = useState(false);
  const [heartId, setHeartId] = useState("display-none");
  const [unsaved, setSaved] = useState(false);
  const [likesAmount, setLikesAmount] = useState(100);

  function handleClickLike() {
    setLike((current) => !current);
    setLikesAmount(unlike ? likesAmount - 1 : likesAmount + 1);
  }

  function handleClickLikeImage(e) {
    if (e.detail === 2) {
      setLike(true);
      setLikesAmount(unlike ? likesAmount : likesAmount + 1);
      setHeartId("like-coracao");
      setTimeout(() => setHeartId("display-none"), 500);
    }
  }

  function handleClickSaved() {
    setSaved((current) => !current);
  }

  return (
    <div data-test="post" className="post">
      <div className="topo">
        <div className="usuario">
          <img src={`assets/img/${props.user}.svg`} alt="imagem-usuario" />
          {props.user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img
          onClick={handleClickLikeImage}
          src={`assets/img/${props.image}.svg`}
          alt="imagem-post"
          data-test="post-image"
        />
        <ion-icon id={heartId} name="heart"></ion-icon>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              onClick={handleClickLike}
              id={unlike ? "button-like" : ""}
              name={unlike ? "heart" : "heart-outline"}
              data-test="like-post"
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={handleClickSaved}
              name={unsaved ? "bookmark" : "bookmark-outline"}
              data-test="save-post"
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={`assets/img/${props.like}.svg`} alt="imagem-curtida" />
          <div className="texto">
            Curtido por <strong>{props.like}</strong> e{" "}
            <strong>
              outras <span data-test="likes-number">{likesAmount}</span> pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

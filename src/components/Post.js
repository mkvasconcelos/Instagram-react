import React, { useState } from "react";

function Post(props) {
  const [unlike, setLike] = useState(false);
  const [unsaved, setSaved] = useState(false);
  const [likes, setLikes] = useState(100);

  function handleClickLike() {
    setLike((current) => !current);
    setLikes(unlike ? likes - 1 : likes + 1);
  }

  function handleClickLikeImage() {
    if (!unlike) {
      setLike((current) => !current);
      setLikes(unlike ? likes - 1 : likes + 1);
    }
  }

  function handleClickSaved() {
    setSaved((current) => !current);
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${props.user}.svg`} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          onClick={handleClickLikeImage}
          src={`assets/img/${props.image}.svg`}
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              onClick={handleClickLike}
              class={unlike ? "button-like" : ""}
              name={unlike ? "heart" : "heart-outline"}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={handleClickSaved}
              name={unsaved ? "bookmark" : "bookmark-outline"}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={`assets/img/${props.like}.svg`} />
          <div class="texto">
            Curtido por <strong>{props.like}</strong> e{" "}
            <strong>outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

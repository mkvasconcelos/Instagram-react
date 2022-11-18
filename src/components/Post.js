import React, { useState } from "react";

export default function Post(props) {
  const [unlike, setLike] = useState(false);
  const [unsaved, setSaved] = useState(false);
  const [likes, setLikes] = useState(100);

  function handleClickLike() {
    setLike((current) => !current);
    setLikes(unlike ? likes - 1 : likes + 1);
  }

  function handleClickLikeImage(e) {
    // switch (e.detail) {
    //   case 1:
    //     console.log("click");
    //     break;
    //   case 2:
    //     console.log("double click");
    //     break;
    //   case 3:
    //     console.log("triple click");
    //     break;
    // }
    if (!unlike & (e.detail === 2)) {
      setLike((current) => !current);
      setLikes(unlike ? likes - 1 : likes + 1);
    }
  }

  function handleClickSaved() {
    setSaved((current) => !current);
  }

  return (
    <div data-test="post" class="post">
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
          data-test="post-image"
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              onClick={handleClickLike}
              class={unlike ? "button-like" : ""}
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

        <div class="curtidas">
          <img src={`assets/img/${props.like}.svg`} />
          <div class="texto">
            Curtido por <strong>{props.like}</strong> e{" "}
            <strong>
              outras <span data-test="likes-number">{likes}</span> pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

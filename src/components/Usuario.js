import React, { useState } from "react";

function Usuario() {
  const [user, setUser] = useState("Catana");
  function editUser() {
    setUser(prompt("Qual o novo nome de usuário?"));
  }
  const [userImage, setUserImage] = useState("assets/img/catanacomics.svg");
  function editUserImage() {
    setUserImage(prompt("Qual a nova imagem de perfil (URL)?"));
  }
  return (
    <div class="usuario">
      <img onClick={editUserImage} src={userImage} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {user}
          <ion-icon onClick={editUser} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default Usuario;

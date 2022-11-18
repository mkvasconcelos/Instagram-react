import React, { useState } from "react";

export default function Usuario() {
  const [user, setUser] = useState("Catana");
  function editUser() {
    setUser(prompt("Qual o novo nome de usuário?"));
  }
  const [userImage, setUserImage] = useState("assets/img/catanacomics.svg");
  function editUserImage() {
    setUserImage(prompt("Qual a nova imagem de perfil (URL)?"));
  }
  return (
    <div className="usuario" data-test="user">
      <img
        data-test="profile-image"
        onClick={editUserImage}
        src={userImage}
        alt="logo-profile"
      />
      <div className="texto">
        <strong>catanacomics</strong>
        <span data-test="name">
          {user}
          <ion-icon
            data-test="edit-name"
            onClick={editUser}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}

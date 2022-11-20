import React, { useState } from "react";

export default function Usuario(props) {
  const [user, setUser] = useState("");
  function editUser() {
    setUser(prompt("Qual o novo nome de usuário?"));
  }
  const [userImage, setUserImage] = useState("");
  function editUserImage() {
    setUserImage(prompt("Qual a nova imagem de perfil (URL)?"));
  }
  return (
    <div className="usuario" data-test="user">
      <img
        data-test="profile-image"
        onClick={editUserImage}
        src={!userImage ? props.image : userImage}
        alt="logo-profile"
      />
      <div className="texto">
        <strong>catanacomics</strong>
        <span data-test="name">
          {!user ? props.user : user}
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

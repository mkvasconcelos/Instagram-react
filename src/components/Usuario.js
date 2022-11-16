import React, { useState } from "react";

function Usuario() {
  const [user, setUser] = useState("Catana");
  function editUser() {
    setUser(prompt("Qual o novo nome de usuário?"));
  }
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
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

import React from "react";

export default function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={`assets/img/${props.title}.svg`} alt="logo-usuario" />
        <div className="texto">
          <div className="nome">{props.title}</div>
          <div className="razao">Segue você</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}

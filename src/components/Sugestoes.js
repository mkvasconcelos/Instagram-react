import React from "react";
import Sugestao from "./Sugestao";

function Sugestoes() {
  const sugestoes = [
    <Sugestao title="bad.vibes.memes" />,
    <Sugestao title="chibirdart" />,
    <Sugestao title="razoesparaacreditar" />,
    <Sugestao title="adorable_animals" />,
    <Sugestao title="smallcutecats" />,
  ];
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((sugestao) => (
        <div>{sugestao}</div>
      ))}
    </div>
  );
}

export default Sugestoes;

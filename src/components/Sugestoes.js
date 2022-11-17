import React from "react";
import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const sugestoes = [
    "bad.vibes.memes",
    "chibirdart",
    "razoesparaacreditar",
    "adorable_animals",
    "smallcutecats",
  ];
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((s) => (
        <Sugestao title={s} />
      ))}
    </div>
  );
}

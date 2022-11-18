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
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((s) => (
        <Sugestao key={s} title={s} />
      ))}
    </div>
  );
}

import React from "react";
import Story from "./Story";
import { IoChevronForwardCircle } from "react-icons/io5";

export default function Stories() {
  const stories = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];
  return (
    <div className="stories">
      {stories.map((s) => (
        <Story key={s} title={s} />
      ))}
      ;
      <div className="setinha">
        {/* <ion-icon name="chevron-forward-circle"></ion-icon> */}
        <IoChevronForwardCircle />
      </div>
    </div>
  );
}

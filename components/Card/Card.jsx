import React from "react";
import { cardSmall, cardLarge, text } from "./card.module.css";

export default function Card({ children, style, key, size }) {

  function doSize(componentSize) {
    if (componentSize === 'small') return cardSmall;
    if (componentSize === 'large') return cardLarge;
    return cardSmall;
  }

  return (
    <div id={`element${key}`} key={key} className={doSize(size)} style={style}>
        {children}
    </div>
  );
}
import React from "react";
import { container, text } from "./rowWrapper.module.css";

export default function RowWrapper({ children }) {

  return (
    <div id='rowWrapper' className={container}>
        {children}
    </div>
  );
}
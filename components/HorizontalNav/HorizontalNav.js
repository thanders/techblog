import React from "react";
import { navMenu, navUL, navLI } from "./horizontalNav.module.css";

export default function HorizontalNav(props) {

  return (
    <header id='header' style={props.styles} >
        <nav id="Nav" className={navMenu}>
          <ul className={navUL}>
            <li className={navLI} >{props.logo}</li>
            <li className={navLI}>{props.buttonLeft}</li>
          </ul>
          <ul className={navUL}>
            <li className={navLI} >{props.buttonRightOne}</li>
            <li className={navLI} >{props.buttonRightTwo}</li>
            <li className={navLI} >{props.buttonRightThree}</li>
          </ul>
        </nav>
    </header>
  );
}
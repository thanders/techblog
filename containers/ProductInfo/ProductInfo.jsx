import React from "react";
import { infoContainer, infoChild, title} from './productInfo.module.css'

export default function ProductInfo(props) {

  return (
    <div key={props.key}>
      <a href={props.productTitleURL} target="_blank" rel="noreferrer">
        <h3 className={title} >{props.productTitle}</h3>
      </a>
      <div className={infoContainer}>
        <div className={infoChild}>
          <p>Manufacturer</p>
          <p>MSRP</p>
          <p>Release date</p>
        </div>
        <div>
          <a href={props.manufacturerURL} target="_blank" rel="noreferrer">
            <p> {props.manufacturer}</p>
          </a>
          <p>{props.cost}</p>
          <p>{props.releaseDate}</p>
        </div>
      </div>
    </div>
  );
}
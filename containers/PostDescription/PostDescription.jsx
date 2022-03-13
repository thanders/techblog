import React from "react";
import { postDescContainer, postDescChild, title} from './postDescription.module.css'

export default function PostDescription(props) {

  return (
    <React.Fragment>
      <p>{props.reviewDescription}</p>
      <div className={postDescContainer}>
        <div className={postDescChild}>
          <p>{props.reviewScore}</p>
        </div>
        <div>
          <p>{props.reviewDate}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
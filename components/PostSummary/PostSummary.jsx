import React from "react";

export default function PostSummary(props) {

  return (
    <div id={'PostSummary'} key={props.key} style={{ width: '350px' }} >
        <h3>{props.title}</h3>
        <p>{props.manufacturer}</p>
        <p>{props.reviewDate}</p>
    </div>
  );
}
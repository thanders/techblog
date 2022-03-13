import React from "react";
import { css } from "styled-components";
import { topicContainer, compatabilityContainer, infoChild, title, verdictUL, verdictLI, scoreContainer, scoreResult, scoreTitle, scoreRow} from './verdict.module.css'

export default function Verdict(props) {
  const scoreSum = props.score.reduce((sum, li) => sum + li.scoreValue, 0);
  const scoreAverage = scoreSum / 3;
  const totalScore = Math.round(scoreAverage * 2) / 2;
  
  return (
    <div key={props.key}>
      <h3 className={title} >Summary</h3>
      <div id='compatabilitySummary' className={compatabilityContainer}>
        <div className={infoChild}>
          <div style={{ width: '100%', textAlign: 'center'}}>Good</div>
          <ul className={verdictUL}>
          {props.good.map((elem, key) => <li className={verdictLI} key={key}>{elem}</li>)}
          </ul>
        </div>
        <div className={infoChild}>
          <div style={{ width: '100%', textAlign: 'center'}}>Bad</div>
          <ul className={verdictUL}>
          {props.bad.map((elem, key) => <li className={verdictLI} key={key}>{elem}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
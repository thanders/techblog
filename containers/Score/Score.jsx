import React from "react";
import { css } from "styled-components";
import { topicContainer, compatabilityContainer, infoChild, title, verdictUL, verdictLI, scoreContainer, scoreResult, scoreTitle, scoreRow} from './verdict.module.css'

export default function Score(props) {
  const scoreSum = props.score.reduce((sum, li) => sum + li.scoreValue, 0);
  const scoreAverage = scoreSum / 3;
  const totalScore = Math.round(scoreAverage * 2) / 2;
  
  return (
    <div key={props.key}>
      <h3 className={title} >Our conclusion</h3>

      <div id='compatabilityTopics' >
          <div className={topicContainer}>
            {props.score.map((elem, key) => {
              return(
                  <div className={scoreRow} key={key}>
                    <div className={scoreTitle} >
                      {elem.scoreName}
                    </div>
                    <div className={scoreResult} >
                      {elem.scoreValue} / 5
                    </div>
                  </div>
              )})}
            <div className={scoreRow}>
              <div className={scoreTitle} >
                Overall
              </div>
              <div className={scoreResult}>
                {totalScore}
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
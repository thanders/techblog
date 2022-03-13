import React from "react";
import { topicContainer, compatabilityContainer, infoChild, title} from './compatability.module.css'

export default function Compatability(props) {

  const osNames = props.osList.map((elem) => Object.keys(elem)[0]);
  const osResults = props.osList.map((elem) => Object.values(elem)[0]);
  
  return (
    <div key={props.key}>
      <h3 className={title} >Compatability / distribution</h3>
      <div id='compatabilitySummary' className={compatabilityContainer}>
        <div className={infoChild}>
          {osNames.map((elem, key) => <p key={key}>{elem}</p>)}
        </div>
        <div>
          {osResults.map((elem, key) => <p key={key}>{elem}</p>)}
        </div>
      </div>
      <div id='compatabilityTopics' >
          {props.sofwareList.map((elem, key) => {
            return (
              <div className={topicContainer} key={key}>
                <h4 style={{ width: '100%', textAlign: 'center' }}>
                  <a href={elem.moreInfo} target='_blank' rel="noreferrer" >{elem.name}
                  </a>
                </h4>
                {elem.distribution.map((dist, key) => (
                  <p key={key}>{dist}</p>
                  ))}
              </div>
            )
          })}
      </div>
    </div>
  );
}
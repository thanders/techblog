import React, { useContext } from "react";
import FilterContext from '../../FilterContext';
import { rowContainer, columnContainer, inputStyle} from "./multiCheckbox.module.css";

export default function MultiCheckbox(props) {

  const { config } = props;
  const { filterStatus, setFilterStatus } = useContext(FilterContext);
  const deepCopyStatus = JSON.parse(JSON.stringify(filterStatus));
  
  return (
    <div className={rowContainer} >
      {config.map((checkbox, index) => {
        return(
          <div key={index} className={columnContainer} onClick={() => {
            deepCopyStatus[checkbox.id] = !deepCopyStatus[checkbox.id];
            setFilterStatus(deepCopyStatus);
            }}
          >
            <span>{checkbox.name}</span>
            <input
              type="checkbox"
              id={checkbox.id}
              name={checkbox.name}
              checked={filterStatus[checkbox.id]}
              value={true}
              className={inputStyle}
              onChange={() => {}}
              >
            </input>
        </div>
        )
      })
      }
    </div>
  );
}
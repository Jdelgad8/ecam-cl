import React from "react";
import '../styles/select-option.css';

function SelectOption(props) {
  return(
    <option className="select-option" value={props.value}>
      {props.children}
    </option>
  )
}

export default SelectOption;
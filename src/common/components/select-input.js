import React from "react";
import '../styles/select-input.css';

function SelectInput(props) {
  return(
    <select 
      className="select-input" 
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      {props.children}
    </select>
  )
}

export default SelectInput;
import React from 'react';
import '../styles/checkbox-input.css';

function CheckboxInput(props){
  return (
    <input 
      className="checkbox-input" 
      type="checkbox" 
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
    />
  )
}

export default CheckboxInput;
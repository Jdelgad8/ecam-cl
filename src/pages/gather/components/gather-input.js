import React from 'react';
import '../styles/gather-top-input-container.css';

function GatherInput (props) {
  return (
      <input 
        className="gather-top-input-container-input" 
        type={"text"} 
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange} 
      />
  )
}

export default GatherInput;
import React from 'react';
import '../styles/input.css';

function Input(props){
  return (
    <input 
      className="Input" 
      type={props.type} 
      name={props.name} 
      placeholder={props.placeholder} 
      value={props.value} 
      onChange={props.onChange}
      autoComplete={props.autoComplete}
    />
  )
}

export default Input
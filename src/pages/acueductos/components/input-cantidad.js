import React from 'react';
import '../styles/input-cantidad.css';

function InputCantidad (props) {
  return(
    <input 
      className="input-cantidad" 
      name={props.name}
      value={props.value}
      type="text" 
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}

export default InputCantidad;
import React from 'react';
import '../styles/text-area.css';

function TextArea (props) {
  return(
    <textarea 
      className="text-area"
      name={props.name} 
      type={props.type}
      value={props.value} 
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default TextArea;

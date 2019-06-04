import React from 'react';
import '../styles/form-text.css';

function FormText(props) {
  return(
    <p className="form-text">
      {props.children}
    </p>
  )
}

export default FormText;

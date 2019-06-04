import React from 'react';
import '../styles/impactos-form-text.css';

function ImpactosFormText(props) {
  return(
    <p className="impactos-form-text">
      {props.children}
    </p>
  )
}

export default ImpactosFormText;
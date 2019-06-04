import React from 'react';
import '../styles/login-input-container.css';

function LoginInputContainer (props) {
  return(
    <div className="login-input-container">
      {props.children}
    </div>
  )
}

export default LoginInputContainer;
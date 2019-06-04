import React from 'react';
import '../styles/signup-input-container.css';

function SignupInputContainer (props) {
  return(
    <div className="signup-input-container">
      {props.children}
    </div>
  )
}

export default SignupInputContainer;
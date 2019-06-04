import React from 'react';
import '../styles/gather-middle-input-container.css';

function GatherMiddleInputContainer (props) {
  return (
    <div className="gather-middle-input-container">
      {props.children}
    </div>
  )
}

export default GatherMiddleInputContainer;
import React from 'react';
import '../styles/gather-top-input-container.css';

function GatherTopInputContainer (props) {
  return (
    <div className="gather-top-input-container">
      {props.children}
    </div>
  )
}

export default GatherTopInputContainer;
import React from 'react';
import '../styles/index-bottom-container.css';

function IndexBottomContainer (props) {
  return(
    <div className="Index-bottom-Container">
      {props.children}
    </div>
  )
}

export default IndexBottomContainer;
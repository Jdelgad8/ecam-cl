import React from 'react';
import '../styles/gather-layout.css';

function GatherLayout (props) {
  return (
    <div className="gather-layout">
      {props.children}
    </div>
  )
}

export default GatherLayout;
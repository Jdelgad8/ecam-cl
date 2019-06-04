import React from 'react';
import '../styles/horizontal-layout.css';

function HorizontalLayout(props) {
  return (
    <div className="Horizontal">
      {props.children}
    </div>
  )
}

export default HorizontalLayout;
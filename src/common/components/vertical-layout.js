import React from 'react';
import '../styles/vertical-layout.css';

function VerticalLayout(props) {
  return (
    <div className="Vertical">
      {props.children}
    </div>
  )
}

export default VerticalLayout;
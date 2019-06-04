import React from 'react';
import '../styles/black-title.css';

function BlackTitle(props) {
  return (
    <h3 className="black-title">
      {props.children}
    </h3>
  )
}

export default BlackTitle;
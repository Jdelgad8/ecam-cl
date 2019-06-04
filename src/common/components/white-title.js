import React from 'react';
import '../styles/white-title.css';

function WhiteTitle(props) {
  return (
    <h3 className="white-title">{props.children}</h3>
  )
}

export default WhiteTitle;
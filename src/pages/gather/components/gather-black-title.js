import React from 'react';
import '../styles/gather-black-title.css';

function GatherBlackTitle(props) {
  return (
    <h3 className="gather-black-title">
      {props.children}
    </h3>
  )
}

export default GatherBlackTitle;
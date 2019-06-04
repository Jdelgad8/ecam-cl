import React from 'react';
import '../styles/background-image.css';

function BackgroundImage(props) {
  return (
    <div className="background-image">
      {props.children}
    </div>
  )
}

export default BackgroundImage;
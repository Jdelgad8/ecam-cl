import React from 'react';
import '../styles/background-image-agua.css';

function BackgroundImageAgua(props) {
  return (
    <div className="background-image-agua">
      {props.children}
    </div>
  )
}

export default BackgroundImageAgua;
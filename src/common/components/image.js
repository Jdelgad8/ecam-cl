import React from 'react';
import '../styles/image.css';

function Image(props) {
  return (
    <img className="image" src={props.src} height={props.height} width={props.width} alt={""} />
  )
}

export default Image;

import React from 'react';
import '../styles/url-input.css';

function URLInput(props){
  return (
    <input className="url-input" type="URL" name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  )
}

export default URLInput
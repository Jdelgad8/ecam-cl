import React from 'react';

function UploadInput(props) {
  return (
    <input
      name={props.name}
      type='file'
      onChange={props.onChange}
    />

  )
}

export default UploadInput;
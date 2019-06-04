import React from 'react';
import '../styles/center-form-layout.css';

function CenterFormLayout (props) {
  return(
    <section className="center-form-layout">
      {props.children}
    </section>
  )
}

export default CenterFormLayout;
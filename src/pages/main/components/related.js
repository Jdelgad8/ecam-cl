import React from 'react';
import WhiteTitle from '../../../common/components/white-title';
import logo from '../../../images/ucc-logo.png';
import '../styles/related.css';

function Related(props) {
  return (
    <div className="Related">
      <WhiteTitle className="">ECAM 2018</WhiteTitle>
      <div className="Related-image">
        <img src={logo} width={150} height={150} alt={""} />
      </div>
    </div>
  )
}

export default Related;
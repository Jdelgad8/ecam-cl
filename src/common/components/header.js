import React from 'react';
import WhiteTitle from '../../common/components/white-title';
import '../styles/header.css';

function Header(props) {
  return (
    <section className="Header">
      <WhiteTitle>
        {props.children}
      </WhiteTitle>
    </section>
  )
}

export default Header;
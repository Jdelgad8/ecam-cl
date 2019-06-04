import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/bottom-buttons.css';
import Button from './buttton';


function BottomButtons(props) {
  return (
    <section className="bottom-buttons">
      <Button onClick={props.onClick}>
        Guardar
        </Button>
      <Link to="/main">
        <Button>
          Salir
        </Button>
      </Link>
    </section>
  )
}

export default BottomButtons;
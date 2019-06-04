import React from 'react';
import '../styles/main-layout.css';

function MainLayout(props) {
    return (
        <section className="MainLayout">
            {props.children}
        </section>
    )
}

export default MainLayout;
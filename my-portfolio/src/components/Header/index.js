import React from 'react';
import Nav from '../Nav/Nav';
import geist from './Giest.png';


function Header() {
    return (
        <div className="header">
            <img src={geist} alt="geist" />
            <Nav></Nav>
        </div>
    );
}

export default Header;

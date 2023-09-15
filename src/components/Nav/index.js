import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/sixFK901.svg';
import { navWrapper, divWrapper, itemsdiv, itemsul, items } from './styles';


function Nav() {

    return (
        <>
            <nav className={navWrapper}>
                <div className={divWrapper}>
                <div className={itemsdiv}>
                    <ul className={itemsul}>
                        <li>
                            <Link to="/" className={items}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={items}>About</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className={items}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/resume" className={items}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
        </>
    );
}

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/sixFK901.svg';
import { navWrapper, divWrapper, divAnchor, anchorImg, anchorSpan, navbtn, btnSpan, btnSvg, itemsdiv, itemsul, items } from './styles';



function Nav() {
    return (
        <>
            <nav className={navWrapper}>
                <div className={divWrapper}>
                    <Link to="/" className={divAnchor}>
                        <img src={logo} className={anchorImg} alt="Logo" />
                        <span className={anchorSpan}>Geist</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className={navbtn} aria-controls="navbar-default" aria-expanded="false">
                        <span className={btnSpan}>Open main menu</span>
                        <svg className={btnSvg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={itemsdiv} id="navbar-default">
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
            </nav>
        </>
    );
}

export default Nav;

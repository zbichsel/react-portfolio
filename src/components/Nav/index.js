import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navWrapper, divWrapper, btnDiv, btnNav, svg1, svg2, itemsdiv, itemsul, items } from './styles';


function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className={navWrapper}>
                <div className={divWrapper}>
                    <div className={btnDiv}>
                        <button className={btnNav} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg
                                className={`${svg1} ${isMenuOpen ? "hidden" : "block"}`}
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                            <svg
                                className={`${svg2} ${isMenuOpen ? "block" : "hidden"}`}
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${itemsdiv} ${isMenuOpen ? "block" : "hidden"}`}>
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

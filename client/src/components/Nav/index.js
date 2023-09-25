import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navWrapper, divWrapper, btnDiv, btnNav, svg1, itemsdiv, itemsul, items } from './styles';

export default function SecretNV() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handlePortfolioScroll = () => {
        const element = document.getElementById('portfolio');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactScroll = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAboutScroll = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <>
            <nav className={navWrapper}>
                <div className={divWrapper}>
                    <div className={btnDiv}>
                        <button type="button" className={btnNav} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={svg1}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`${itemsdiv} ${isMenuOpen ? "block" : "hidden"}`}>
                        <ul className={itemsul}>
                            <li>
                                <Link to="/" className={items}>Home</Link>
                            </li>
                            <li>
                                <button className={items} onClick={handleAboutScroll}>About</button>
                            </li>
                            <li>
                                <button className={items} onClick={handlePortfolioScroll}>Portfolio</button>
                            </li>
                            <li>
                                <button className={items} onClick={handleContactScroll}>Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}
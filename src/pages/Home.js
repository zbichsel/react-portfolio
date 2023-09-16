import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}
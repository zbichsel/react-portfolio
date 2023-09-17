import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
    console.log("If you're reading this, send me an email throught the contact form and tell me what your favorite scary movie is. 🎃🔪👻\n\nHappy Halloween!");
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
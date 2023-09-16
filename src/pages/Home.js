import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Portfolio />
            <Footer />
        </>
    );
}
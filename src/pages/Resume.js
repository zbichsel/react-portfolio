import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Resumepage() {
    return (
        <>
            <Header />
            <Nav />
            <Resume />
            <Contact />
            <Footer />
        </>
    );
}
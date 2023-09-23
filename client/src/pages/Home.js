import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';


export default function Home() {
    console.log("If you're reading this, find the secret button, create an account, play my quiz and listen to a spooky song. 🎃🔪👻\n\nHappy Halloween!");

    if (Auth.loggedIn()) {
        return <Navigate to="/secret" />
    } else {
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
}
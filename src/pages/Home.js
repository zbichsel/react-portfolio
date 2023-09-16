import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import Portfolio from '../components/Portfolio';


export default function Home() {
    return (
        <>
        <div>
            <Header/>
            <Nav/>
            <About />
            <Portfolio/>
        </div>
        </>
    );
}
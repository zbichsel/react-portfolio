import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';


export default function Home() {
    return (
        <>
        <div>
            <Header/>
            <Nav/>
            <Portfolio/>
        </div>
        </>
    );
}
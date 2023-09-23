import React from 'react';
import SecretHP from '../components/SecretHP';
import SecretNV from '../components/SecretNV';
import SecretComp from '../components/SecretCMP';
import Quiz from '../components/Quiz';
// import SpotifyPlayer from '../components/Spotify';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';

export default function SecretPage() {
    if (!Auth.loggedIn()){
        return <Navigate to="/" />
    } else {
        return (
            <div className='h-fit bg-orange-400'>
                <SecretHP />
                <SecretNV />
                <SecretComp />
                <Quiz />
            </div>
        )
    }
};
import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';
import SecretComp from '../components/SecretCMP';
import SecretHP from '../components/SecretHP';
import Quiz from '../components/Quiz';
// import SpotifyPlayer from '../components/Spotify'; tbd

export default function SecretPage() {
    if (!Auth.loggedIn()){
        return <Navigate to="/" />
    } else {
        return (
            <div className=''>
                {/*<SecretHP />*/}
                <SecretComp />
                <Quiz />
            </div>
        )
    }
};
import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';
import SecretComp from '../components/SecretCMP';
import Quiz from '../components/Quiz';
// import SpotifyPlayer from '../components/Spotify'; tbd

function SecretPage() {
    if (!Auth.loggedIn()){
        return <Navigate to="/" />
    } else {
        return (
            <div>
                <SecretComp />
                <Quiz />
            </div>
        )
    }
};

export default SecretPage;
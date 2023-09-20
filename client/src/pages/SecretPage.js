import React from 'react';
import SecretHP from '../components/SecretHP';
import SecretNV from '../components/SecretNV';
import SecretComp from '../components/SecretCMP';
import Quiz from '../components/Quiz';
import SpotifyPlayer from '../components/Spotify';

export default function SecretPage() {
    return (
        <div className='h-fit bg-orange-400'>
            <SecretHP />
            <SecretNV />
            <SecretComp />
            <Quiz />
            <SpotifyPlayer/>
        </div>
    )
};
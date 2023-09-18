import React from 'react';
import SecretHP from '../components/SecretHP';
import SecretNV from '../components/SecretNV';
import SecretComp from '../components/SecretCMP';

export default function SecretPage() {
    return(
        <div className='h-screen bg-green-300'>
        <SecretHP/>
        <SecretNV/>
        <SecretComp />
        </div>
    )
};
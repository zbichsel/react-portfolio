import React from 'react';
import pic from '../../images/halloween-23439.svg';
import logo from '../../images/other.svg';
import { divWrapper, divImg, divH1 } from './styles';

export default function SecretHP() {
    return (
        <div
            className={divWrapper}
        >
            <div
                className={divImg}
                style={{ backgroundImage: `url(${pic})` }}>
            </div>
            <h1
                className={divH1}
            >
                Halloween
            </h1>
        </div>
    )
};
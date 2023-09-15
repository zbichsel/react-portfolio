import React from 'react';
import pic from '../../images/zack.jpeg';
import logo from '../../images/other.svg';
import { divWrapper, divImg, divH1 } from './styles';


export default function Header() {
    return (
        <div className={divWrapper}>
            <div className={divImg} style={{ backgroundImage: `url(${pic})` }}></div>
            <h1 className={divH1} style={{ backgroundImage: `url(${logo})` }}>Zackrey Bichsel</h1>
        </div>
    );
}

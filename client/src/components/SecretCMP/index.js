import React from 'react';
import { divWrapper, gridItem, gridItem2 } from './styles';
import PlaySound from '../Sound';
import coverart from '../../images/mmyers.jpg';

export default function SecretComp() {
    return (
        <div className='p-2'>
            <div
                className={divWrapper}
            >
                <div
                    className={gridItem}
                >
                    {PlaySound()}
                </div>
                <div
                    className={gridItem2}
                >
                    <img src={coverart} className="rounded-md" style={{ height: '10rem' }} alt="Halloween Ends soundtrack cover art" />
                </div>
            </div>
        </div>
    )
}
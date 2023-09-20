import React from 'react';
import { divWrapper, gridItem, gridItem2, gridItem3, gridItem4, gridItem5, gridItem6 } from './styles';
import PlaySound from '../Sound';

export default function SecretComp() {
    return (
        <div className='bg-orange-400 p-2'>
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
                Scary 2
            </div>
            <div
                className={gridItem3}
            >
                Scary 3
            </div>
            <div
                className={gridItem4}
            >
                Scary 4
            </div>
            <div
                className={gridItem5}
            >
                Scary 5
            </div>
            <div
                className={gridItem6}
            >
                Scary 6
            </div>
        </div>
        </div>
    )
}
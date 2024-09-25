import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import HKtheme from '../../sounds/Proc.wav';
import { btnS } from './style';

export default function PlaySound() {

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <button className={btnS} onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}</button>
            <ReactHowler
                src={HKtheme}
                playing={true}
            />
        </div>
    );
};
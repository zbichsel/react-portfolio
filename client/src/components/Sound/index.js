import React, { useState } from 'react';
import Sound from 'react-sound';
import HKtheme from '../../sounds/Proc.wav';
import { btnS } from './style';

export default function PlaySound() {

    const [ isPlaying, setIsPlaying ] = useState(false);

    return (
        <div>
            <button className={btnS} onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}</button>
            <Sound
                url={HKtheme}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                volume={20}
                autoLoad={true}
            />
        </div>
    );
};
import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import SongOne from '../../sounds/Where is Jeremy.wav';
import SongTwo from '../../sounds/Halloween Ends Main Title.wav';
import SongThree from '../../sounds/Lauries Theme Ends.wav';
import SongFour from '../../sounds/The Cave.wav';
import SongFive from '../../sounds/Cool Kid.wav';
import SongSix from '../../sounds/Drag to the Cave.wav';
import SongSeven from '../../sounds/Evil Eyes.wav';
import SongEight from '../../sounds/Transformation.wav';
import SongNine from '../../sounds/Because of You.wav';
import SongTen from '../../sounds/Requiem For Jeremy.wav';
import SongEleven from '../../sounds/Kill The Cop.wav';
import SongTwelve from '../../sounds/Corey and Michael.wav';
import SongThirteen from '../../sounds/Coreys Requiem.wav';
import SongFourteen from '../../sounds/The Junk Yard.wav';
import SongFifteen from '../../sounds/Where Are You.wav';
import SongSixteen from '../../sounds/Bye Bye Corey.wav';
import SongSeventeen from '../../sounds/The Flight.wav';
import SongEighteen from '../../sounds/Before Her Eyes.wav';
import SongNineteen from '../../sounds/The Procession.wav';
import SongTwenty from '../../sounds/Cherry Blossoms.wav';
import SongTwentyOne from '../../sounds/Halloween Ends.wav';

const songs = [
    { id: 'SongOne', title: 'Where is Jeremy', src: SongOne },
    { id: 'SongTwo', title: 'Halloween Ends Main Title', src: SongTwo },
    { id: 'SongThree', title: 'Lauries Theme Ends', src: SongThree },
    { id: 'SongFour', title: 'The Cave', src: SongFour },
    { id: 'SongFive', title: 'Cool Kid', src: SongFive },
    { id: 'SongSix', title: 'Drag to the Cave', src: SongSix },
    { id: 'SongSeven', title: 'Evil Eyes', src: SongSeven },
    { id: 'SongEight', title: 'Transformation', src: SongEight },
    { id: 'SongNine', title: 'Because of You', src: SongNine },
    { id: 'SongTen', title: 'Requiem For Jeremy', src: SongTen },
    { id: 'SongEleven', title: 'Kill The Cop', src: SongEleven },
    { id: 'SongTwelve', title: 'Corey and Michael', src: SongTwelve },
    { id: 'SongThirteen', title: 'Coreys Requiem', src: SongThirteen },
    { id: 'SongFourteen', title: 'The Junk Yard', src: SongFourteen },
    { id: 'SongFifteen', title: 'Where Are You', src: SongFifteen },
    { id: 'SongSixteen', title: 'Bye Bye Corey', src: SongSixteen },
    { id: 'SongSeventeen', title: 'The Flight', src: SongSeventeen },
    { id: 'SongEighteen', title: 'Before Her Eyes', src: SongEighteen },
    { id: 'SongNineteen', title: 'The Procession', src: SongNineteen },
    { id: 'SongTwenty', title: 'Cherry Blossoms', src: SongTwenty },
    { id: 'SongTwentyOne', title: 'Halloween Ends', src: SongTwentyOne }
];

function PlaySounds() {
    // State to track which song is currently playing
    const [currentPlaying, setCurrentPlaying] = useState(null);

    const handlePlay = (songId) => {
        // Toggle the clicked song; if already playing, stop it
        if (currentPlaying === songId) {
            setCurrentPlaying(null);
        } else {
            setCurrentPlaying(songId);
        }
    };

    return (
        <div>
            {/* Dynamically generate the buttons and howlers for each song */}
            {songs.map((song) => (
                <div key={song.id} className="mb-4">
                    <button onClick={() => handlePlay(song.id)}>
                        {currentPlaying === song.id ? `☐ ${song.title}` : `▷ ${song.title}`}
                    </button>
                    <ReactHowler
                        src={song.src}
                        playing={currentPlaying === song.id}
                    />
                </div>
            ))}
        </div>
    );
}

export default PlaySounds;

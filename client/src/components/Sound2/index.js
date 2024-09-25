import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import SongTwo from '../../sounds/Halloween Ends Main Title.wav';
import SongSeven from '../../sounds/Evil Eyes.wav';
import SongEight from '../../sounds/Transformation.wav';
import SongTwelve from '../../sounds/Corey and Michael.wav';
import SongFourteen from '../../sounds/The Junk Yard.wav';
import SongSixteen from '../../sounds/Bye Bye Corey.wav';
import SongNineteen from '../../sounds/The Procession.wav';


const songs = [
    { id: 'SongTwo', title: 'Halloween Ends Main Title', src: SongTwo },
    { id: 'SongSeven', title: 'Evil Eyes', src: SongSeven },
    { id: 'SongEight', title: 'Transformation', src: SongEight },
    { id: 'SongTwelve', title: 'Corey and Michael', src: SongTwelve },
    { id: 'SongFourteen', title: 'The Junk Yard', src: SongFourteen },
    { id: 'SongSixteen', title: 'Bye Bye Corey', src: SongSixteen },
    { id: 'SongNineteen', title: 'The Procession', src: SongNineteen }
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

import React, { useState, Suspense, lazy } from 'react';

// Define your songs
const audioPaths = [
    { id: 'SongTwo', title: 'Halloween Ends Main Title', src: () => import('../../sounds/Halloween Ends Main Title.wav') },
    { id: 'SongSeven', title: 'Evil Eyes', src: () => import('../../sounds/Evil Eyes.wav') },
    { id: 'SongEight', title: 'Transformation', src: () => import('../../sounds/Transformation.wav') },
    { id: 'SongTwelve', title: 'Corey and Michael', src: () => import('../../sounds/Corey and Michael.wav') },
    { id: 'SongFourteen', title: 'The Junk Yard', src: () => import('../../sounds/The Junk Yard.wav') },
    { id: 'SongSixteen', title: 'Bye Bye Corey', src: () => import('../../sounds/Bye Bye Corey.wav') },
    { id: 'SongNineteen', title: 'The Procession', src: () => import('../../sounds/The Procession.wav') }
];

// Lazy load the ReactHowler component
const LazyReactHowler = lazy(() => import('react-howler'));

function PlaySounds() {
    const [currentPlaying, setCurrentPlaying] = useState(null);
    const [loadedAudios, setLoadedAudios] = useState({});

    const handlePlay = async (songId, src) => {
        if (currentPlaying === songId) {
            setCurrentPlaying(null);
        } else {
            // Only load the audio if it hasn't been loaded yet
            if (!loadedAudios[songId]) {
                const audioModule = await src(); // Call the function to load the audio
                setLoadedAudios((prev) => ({
                    ...prev,
                    [songId]: audioModule.default
                }));
            }
            setCurrentPlaying(songId);
        }
    };

    return (
        <div>
            {audioPaths.map((song) => (
                <div
                    key={song.id}
                    className="mb-4"
                >
                    <button
                        onClick={() => handlePlay(song.id, song.src)}
                    >
                        {currentPlaying === song.id ? `☐ ${song.title}` : `▷ ${song.title}`}
                    </button>
                    {loadedAudios[song.id] && (
                        <Suspense
                            fallback={<div>Loading audio...</div>}
                        >
                            <LazyReactHowler
                                src={loadedAudios[song.id]}
                                playing={currentPlaying === song.id}
                            />
                        </Suspense>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PlaySounds;

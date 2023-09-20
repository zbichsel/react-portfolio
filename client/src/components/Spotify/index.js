import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SpotifyPlayer() {

    const CLIENT_ID = "af97b68e67954fc99300dd0484dc2a75";
    const REDIRECT_URI = "https://geistx-f7997d6a509e.herokuapp.com/callback";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPOSNE_TYPE = "token";

    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState([]);

    useEffect(() => {

        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }

        setToken(token);

    }, []);


    const logout = () => {

        setToken("");
        window.localStorage.removeItem("token");

    };


    const searchArtists = async (e) => {

        e.preventDefault();
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            },
        })

        setArtists(data.artists.items);

    };


    const renderArtists = () => {

        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img className='h-24 mx-auto' src={artist.images[0].url} alt="" /> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }


    return (
        <div className='bg-orange-400 p-2'>
        <div className='grid grid-cols-2 grid-rows-6 grid-flow-row gap-6 m-2.5 p-6 bg-purple-900 shadow-sm shadow-black border border-purple-800 rounded-sm [&>div]:text-orange-400 [&>div]:font-nav [&>div]:uppercase [&>div]:antialiased [&>div]:text-sm [&>div]:justify-center [&>div]:items-center [&>div]:m-2.5 [&>div]:p-2 [&>div]:bg-purple-800 [&>div]:border [&>div]:border-purple-700 [&>div]:shadow-sm [&>div]:shadow-black [&>div]:rounded-sm text-center'>
            <header>
                <h1 className='text-2xl text-orange-400'>Spotify Search Artists</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPOSNE_TYPE}`}>Login to Spotify</a>
                    : <button className='border border-white px-2 m-2 rounded-full bg-purple-800 hover:bg-purple-700 focus:ring-2 focus:ring-purple-200 text-orange-400' onClick={logout}>Logout</button>}

                {token ?
                    <form className='grid items-center justify-center text-center border rounded-sm shadow-black shadow bg-purple-800 p-2' onSubmit={searchArtists}>
                        <input className='w-auto rounded-sm pl-2 mb-2' type="text" onChange={e => setSearchKey(e.target.value)} />
                        <button className='border border-white rounded-full bg-purple-900 text-orange-400 focus:ring-2 focuse:ring-purple-200 hover:bg-purple-700 shadow-sm shadow-black' type={"submit"}>Search</button>
                    </form>

                    : <h2 className=''>Please login</h2>
                }

            </header>
                {renderArtists()}
        </div>
        </div>
    )
};
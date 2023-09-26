import React, { useState, useEffect } from 'react';
import { divWrapper, divP, imgCard, cardWrapper, imgProps } from './styles';
import logo from '../../images/zack.jpeg';


export default function About() {

    const [ currentTime, setCurrentTime ] = useState(getCurrentTime());

    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={divWrapper}>
            <div className={cardWrapper}>
                <div className={imgCard}>
                    <img className={imgProps} src={logo} alt="a man standing at the grassy knoll" />
                </div>
            </div>
            <div className='text-zinc-50 text-sm mb-12 font-clock border p-2 rounded-full w-full text-center bg-zinc-800 border-zinc-700/50 shadow-sm shadow-zinc-800/50'>
                <h6>24-Hour Clock</h6>
                {currentTime}
            </div>
            <p className={divP} id="about">I have always been deeply passionate about design and web development, and this ardor has grown into a true love affair over the years. The creative freedom, problem-solving challenges, and the endless possibilities of crafting digital experiences have always fascinated me. Recently, I took a significant step towards realizing my dreams by successfully graduating from a rigorous full stack web development bootcamp. This transformative experience not only honed my technical skills but also deepened my appreciation for the art of creating beautiful, functional, and user-friendly websites and applications. I am now more excited than ever to embark on a journey where I can combine my passion for design with my newfound expertise in web development to craft innovative and visually captivating digital solutions.</p>
        </div>
    );
}

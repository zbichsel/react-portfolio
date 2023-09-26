import React from 'react';
import { divWrapper, divP, imgCard, cardWrapper, imgProps } from './styles';
import logo from '../../images/zack.jpeg';


export default function About() {

    return (
        <div className={divWrapper}>
            <div className={cardWrapper}>
                <div className={imgCard}>
                    <img className={imgProps} src={logo} alt="a man standing at the grassy knoll" />
                </div>
            </div>
            <p className={divP} id="about">I have always been deeply passionate about design and web development, and this ardor has grown into a true love affair over the years. The creative freedom, problem-solving challenges, and the endless possibilities of crafting digital experiences have always fascinated me. Recently, I took a significant step towards realizing my dreams by successfully graduating from a rigorous full stack web development bootcamp. This transformative experience not only honed my technical skills but also deepened my appreciation for the art of creating beautiful, functional, and user-friendly websites and applications. I am now more excited than ever to embark on a journey where I can combine my passion for design with my newfound expertise in web development to craft innovative and visually captivating digital solutions.</p>
        </div>
    );
}

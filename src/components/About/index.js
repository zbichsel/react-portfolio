import React from 'react';
import { divWrapper, divP, imgDiv, imgDimens, imgCard, cardWrapper, imgProps } from './styles';
import logo from '../../images/zack.jpeg';


export default function About() {
    return (
        <div className={divWrapper}>
            <div className={cardWrapper}>
                <div className={imgCard}>
                    <a href="https://liq543.github.io/Park-Safe/">
                        <img className={imgProps} src={logo} alt="Park Safe Banner" />
                    </a>
                </div>
            </div>
            <p className={divP}>I have always been deeply passionate about design and web development, and this ardor has grown into a true love affair over the years. The creative freedom, problem-solving challenges, and the endless possibilities of crafting digital experiences have always fascinated me. Recently, I took a significant step towards realizing my dreams by successfully graduating from a rigorous full stack web development bootcamp. This transformative experience not only honed my technical skills but also deepened my appreciation for the art of creating beautiful, functional, and user-friendly websites and applications. I am now more excited than ever to embark on a journey where I can combine my passion for design with my newfound expertise in web development to craft innovative and visually captivating digital solutions.</p>
            <div className={imgDiv}>
                <img className={imgDimens} src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                <img className={imgDimens} src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
                <img className={imgDimens} src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
                <img className={imgDimens} src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
                <img className={imgDimens} src="https://img.shields.io/badge/Mongoose-green?style=for-the-badge&logo=Mongoose&logoColor=white" />
                <img className={imgDimens} src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
                <img className={imgDimens} src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=black" />
                <img className={imgDimens} src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />
                <img className={imgDimens} src="https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black" />
                <img className={imgDimens} src="https://img.shields.io/badge/Html-red?style=for-the-badge&logo=html5&logoColor=black" />
            </div>
        </div>
    );
}

import React from 'react';
import { divWrapper, imgDiv, imgDimens } from './styles';


function Skills() {
    return (
        <div
            className={divWrapper}
            id="skills"
        >
            <div
                className={imgDiv}
            >
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                    alt="javascript logo"
                />
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                    alt="css logo"
                />
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                    alt="tailwindcss logo"
                />
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                    alt="express.js logo"
                />
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/Mongoose-green?style=for-the-badge&logo=Mongoose&logoColor=white"
                    alt="mongoose mongodb npm logo"
                />
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                    alt="node.js logo"
                />
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=black"
                    alt="react logo" />
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"
                    alt="sequelize logo"
                />
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black"
                    alt="handlebars.js logo"
                />
                <img
                    className={imgDimens}
                    src="https://img.shields.io/badge/Html-red?style=for-the-badge&logo=html5&logoColor=black"
                    alt="html-5 logo"
                />
            </div>
        </div>
    );
}

export default Skills;
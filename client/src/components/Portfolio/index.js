import React from 'react';
import { mainWrapper, cardWrapper, imgWrapper, cardTextWrp, cardText, cardP, btnWrapper, btns } from './styles';
import imps from '../../images/ps.png'
import bookify from '../../images/bookify.png';
import gth from '../../images/gth.png';
import tch from '../../images/techblog.png';

export default function Portfolio() {
    return (
        <div className={mainWrapper} id="portfolio">
            <div className={cardWrapper} >
                <div className={imgWrapper}>
                    <a href="https://liq543.github.io/Park-Safe/">
                    <img src={imps} alt="Park Safe Banner" />
                    </a>
                </div>
                <div className={cardTextWrp}>
                    <h4 className={cardText}>
                        Is My Park Safe?
                    </h4>
                    <p className={cardP}>
                        Front End
                    </p>
                </div>
                <div className={btnWrapper}>
                    <a href="https://liq543.github.io/Park-Safe/">
                        <button className={btns}
                        >
                            View Project
                        </button>
                    </a>
                </div>
            </div>
            <div className={cardWrapper}>
                <div className={imgWrapper}>
                    <a href="https://bookify-1-c0d5b3199b9a.herokuapp.com/">
                    <img src={bookify} alt="Bookify Banner" />
                    </a>
                </div>
                <div className={cardTextWrp}>
                    <h4 className={cardText}>
                        Bookify
                    </h4>
                    <p className={cardP}>
                        Front End
                    </p>
                </div>
                <div className={btnWrapper}>
                    <a href="https://bookify-1-c0d5b3199b9a.herokuapp.com/">
                        <button className={btns}
                        >
                            View Project
                        </button>
                    </a>
                </div>
            </div>
            <div className={cardWrapper}>
                <div className={imgWrapper}>
                    <a href="https://gentle-fortress-84585-60555956fddc.herokuapp.com/">
                    <img src={gth} alt="GreenThumb Hub Banner" />
                    </a>
                </div>
                <div className={cardTextWrp}>
                    <h4 className={cardText}>
                        GreenThumb Hub
                    </h4>
                    <p className={cardP}>
                        Front End
                    </p>
                </div>
                <div className={btnWrapper}>
                    <a href="https://gentle-fortress-84585-60555956fddc.herokuapp.com/">
                        <button className={btns}
                        >
                            View Project
                        </button>
                    </a>
                </div>
            </div>
            <div className={cardWrapper}>
                <div className={imgWrapper}>
                    <a href="https://hbstechblog-6cfdfb5424a1.herokuapp.com/">
                    <img src={tch} alt="Tech Blog Banner" />
                    </a>
                </div>
                <div className={cardTextWrp}>
                    <h4 className={cardText}>
                        Tech Blog
                    </h4>
                    <p className={cardP}>
                        MySQL
                    </p>
                </div>
                <div className={btnWrapper}>
                    <a href="https://hbstechblog-6cfdfb5424a1.herokuapp.com/">
                        <button className={btns}
                        >
                            View Project
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import PlaySounds from '../Sound2';
import coverart from '../../images/Hends.jpg';
import pfp from '../../images/mmyers.jpg';
import Auth from "../../utils/auth";
import { div1, div2, image1, heading, unordered1, list1, anchor1, image2, anchor2, vector, button, svg } from './styles';

function SecretComp() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Sidebar Toggle Button */}
            <button
                className={button}
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                <svg
                    className={svg}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M5 7h14M5 12h14M5 17h14"
                    />
                </svg>
            </button>
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
            >
                {/* Content in Sidebar */}
                <div
                    className={div1}
                >
                    {/* User Info Section */}
                    <div
                        className={div2}
                    >
                        <img
                            src={pfp}
                            className={image1}
                            alt="Michael Myers"
                        />
                        <h2
                            className={heading}
                        >
                            Zackrey Bichsel
                        </h2>
                    </div>

                    {/* PlaySounds Component */}
                    <ul
                        className={unordered1}
                    >
                        <li
                            className={list1}
                        >
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className={anchor1}
                            >
                                <span>
                                    {PlaySounds()}
                                </span>
                            </a>
                        </li>
                    </ul>

                    {/* Logout Section */}
                    <div>
                        <img
                            src={coverart}
                            className={image2}
                            alt="Halloween Ends soundtrack cover art"
                        />
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="/"
                                    className={anchor2}
                                    onClick={() => Auth.logout()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className={vector}
                                    >
                                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z" />
                                        <rect
                                            width="32"
                                            height="64"
                                            x="256"
                                            y="232"
                                        />
                                    </svg>
                                    <button
                                        type="button"
                                    >
                                        Logout
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'}`}
            >
            </div>
        </>
    );
}

export default SecretComp;

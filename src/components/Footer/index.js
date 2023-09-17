import React from 'react';
import { divWrap, svg1, div2, div3, div4, a1, svg2, span1, div5, p1, div6, p3, div7, a2 } from './styles';

export default function Footer() {
    return (
        <div className={divWrap}>
            <svg
                className={svg1}
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>
            <div className={div2}>
                <div className={div3}>
                    <div className={div4}>
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Geist"
                            className={a1}
                        >
                            <svg
                                xlmns="http://www.w3.org/2000/svg"
                                className={svg2}
                                viewBox="0 0 24 24"
                                width="36"
                                height="36"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                stroke="currentColor"
                                fill="none"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path
                                    d="M5 4h14a2 2 0 0 1 1.84 2.75l-7.1 12.25a2 2 0 0 1 -3.5 0l-7.1 -12.25a2 2 0 0 1 1.75 -2.75" />
                            </svg>
                            <span className={span1}>
                                Geist
                            </span>
                        </a>
                        <div className={div5}>
                            <p className={p1}>
                                "I swore never to be silent whenever and wherever human beings endure suffering and humiliation. We must always take sides. Neutrality helps the oppressor, never the victim. Silence encourages the tormentor, never the tormented." — Elie Wiesel
                            </p>

                        </div>
                    </div>
                </div>
                <div className={div6}>
                    <p className={p3}>
                        © Copyright 2023 Geist. All rights reserved.
                    </p>
                    <div className={div7}>
                        <a
                            href="/"
                            className={a2}
                        >
                            <svg className="h-5 text-zinc-50 hover:text-[#D242CF]" fill="none" viewBox="0 0 20 20">
                                <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                            </svg>

                        </a>
                        <a
                            href="https://www.linkedin.com/in/zackrey-bichsel-b93576239/"
                            className={a2}
                        >
                            <svg className="h-5 text-zinc-50 hover:text-[#D242CF]" fill="currentColor" viewBox="0 0 15 15">
                                <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                                <path d="M3 5.012H0V15h3V5.012Z" />
                            </svg>

                        </a>
                        <a
                            href="https://github.com/zbichsel"
                            className={a2}
                        >
                            <svg className="h-5 text-zinc-50 hover:text-[#D242CF]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="tel:+12142065006"
                            className={a2}
                        >
                            <svg className="h-5 text-zinc-50 hover:text-[#D242CF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

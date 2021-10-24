import React, { useEffect, useRef } from 'react'
import './Hero.css';
import './effect.js';
import introSound from './../../../../../Assets/audio/intro.mp3';

////
function Hero() {
    const audio = useRef(null)
    useEffect(() => {
        if (audio.current) {
            audio.current.play();
        }
    }, []);
    return (
        <div className="hero">
            <div className="content">
                <audio ref={audio} autoPlay style={{marginTop:100}}>
                    <source src={introSound} type="audio/mpeg" />
                </audio>
                <div className="title">
                    <span className="name">
                        <svg id="Layer_1" stroke="white" data-name="Layer 1" className="the-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1595 150"><defs><style></style></defs><title>name</title>
                            <path className="cls-1 d0" stroke="white" d="M291.58,801.86l-3.19,16.4h43.23l-4,20.58H284.22l-3.48,17.79h51l-4.45,21.26h-78l19.46-97.3H345l-4.31,21.27Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d1" stroke="white" d="M352,877.06q-9-2.09-14-5.28l9.59-18.49a45.17,45.17,0,0,0,12.23,5.08,54.24,54.24,0,0,0,13.9,1.87q12.11,0,12.1-5.42,0-2.22-2.85-3.27a53.3,53.3,0,0,0-9.11-2,109.32,109.32,0,0,1-13.69-3.27,22.61,22.61,0,0,1-9.38-5.91q-4-4.17-4-11.67,0-13.07,11.19-20.23t29-7.15a75,75,0,0,1,15.57,1.59,54.92,54.92,0,0,1,13.06,4.38l-9.31,18.49q-9.45-5.7-22.38-5.7-6.12,0-9.1,1.6c-2,1.07-3,2.43-3,4.1q0,2.22,2.85,3.27a67.08,67.08,0,0,0,9.38,2.29,91.16,91.16,0,0,1,13.41,3.2,22.63,22.63,0,0,1,9.32,6q4,4.17,4,11.4,0,13.07-11.26,20.16t-28.77,7.09A82.32,82.32,0,0,1,352,877.06Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d2" d="M452.27,849.82a22.78,22.78,0,0,0-.28,2.5q0,6.39,6.95,6.39a16.9,16.9,0,0,0,7.92-2.22l3.34,18.21q-7.79,4.44-19.6,4.45T432,873.31q-6.87-5.84-6.88-16.27a31.77,31.77,0,0,1,.7-7.08l5-24.89H419.74l4-19.73h11l3.9-19.6h26.41l-3.9,19.6h17.1l-3.89,19.73h-17.1Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d3" d="M494.38,802.56h26.27l-15,75.33H479.37Zm5.84-12.1a12,12,0,0,1-4.17-9.31,13.92,13.92,0,0,1,4.66-10.77q4.65-4.25,12.3-4.24,6.94,0,11.12,3.54a11.42,11.42,0,0,1,4.17,9.11,14.36,14.36,0,0,1-4.73,11.12q-4.73,4.3-12.37,4.31Q504.39,794.22,500.22,790.46Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d4" d="M569.86,796.23q-2.5,2.43-3.61,7.58l-.28,1.53h17.79l-3.89,19.73h-17.1l-10.56,52.82H525.8l10.56-52.82H525.24l4-19.73h11.12l.56-3.06q2.64-13.35,11.67-21.06t23.77-7.71q11.26,0,18.21,4L584.46,796a14.65,14.65,0,0,0-7.79-2.22A9.36,9.36,0,0,0,569.86,796.23Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d5" d="M673,802.56l-15,75.33H633l1.52-7.08a31,31,0,0,1-21.82,8.34A31.38,31.38,0,0,1,597,875a30.75,30.75,0,0,1-11.74-11.88,36.3,36.3,0,0,1-4.45-18.35,45.1,45.1,0,0,1,5.49-22.17A41.42,41.42,0,0,1,601.2,807a38.86,38.86,0,0,1,20.51-5.69q16.39,0,23.07,10.28l1.81-9ZM634.77,852q5-5.84,5-15.15,0-6.67-3.83-10.56t-10.49-3.9a16.26,16.26,0,0,0-12.93,5.84q-5,5.84-5,15.29,0,6.68,3.82,10.5t10.5,3.82A16.23,16.23,0,0,0,634.77,852Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d6" d="M756.88,807.91q7.44,6.6,7.44,19a46.6,46.6,0,0,1-1,9.31L755,877.89H728.6l7.78-39.19a21.91,21.91,0,0,0,.56-5q0-10-10.43-10a15.89,15.89,0,0,0-11.4,4.24q-4.44,4.25-6.25,12.72l-7.51,37.25H674.94l15-75.33h25l-1.52,7.78a31.5,31.5,0,0,1,11-6.81,36.75,36.75,0,0,1,12.65-2.22Q749.44,801.31,756.88,807.91Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d7" d="M793.79,874.91a32,32,0,0,1-13.76-12,33.32,33.32,0,0,1-4.87-18.07,42.06,42.06,0,0,1,6-22.24A42.57,42.57,0,0,1,797.68,807a49.33,49.33,0,0,1,23.77-5.69,48.08,48.08,0,0,1,20.85,4.23,32.28,32.28,0,0,1,13.76,12,33,33,0,0,1,4.86,18,42.19,42.19,0,0,1-22.44,38,49.17,49.17,0,0,1-23.84,5.7A48.08,48.08,0,0,1,793.79,874.91ZM829.09,852q5-5.84,5-15.15,0-6.67-3.76-10.56t-10.42-3.9A16.26,16.26,0,0,0,807,828.27q-5,5.84-5,15.29,0,6.68,3.75,10.5t10.43,3.82A16.23,16.23,0,0,0,829.09,852Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d8" d="M876,877.06q-9-2.09-14-5.28l9.6-18.49a44.9,44.9,0,0,0,12.23,5.08,54.18,54.18,0,0,0,13.9,1.87q12.09,0,12.09-5.42,0-2.22-2.85-3.27a53.14,53.14,0,0,0-9.1-2,108.88,108.88,0,0,1-13.69-3.27,22.65,22.65,0,0,1-9.39-5.91q-4-4.17-4-11.67,0-13.07,11.19-20.23t29-7.15a74.89,74.89,0,0,1,15.57,1.59,55.16,55.16,0,0,1,13.07,4.38l-9.32,18.49q-9.45-5.7-22.38-5.7c-4.07,0-7.11.53-9.1,1.6s-3,2.43-3,4.1q0,2.22,2.85,3.27a67.46,67.46,0,0,0,9.38,2.29,91,91,0,0,1,13.42,3.2,22.66,22.66,0,0,1,9.31,6q4,4.17,4,11.4,0,13.07-11.26,20.16t-28.77,7.09A82.32,82.32,0,0,1,876,877.06Z" transform="translate(-246.89 -764.14)" />
                        </svg>
                        <svg id="Layer_2" data-name="Layer 1" className="the-svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1595 150">
                            <path className="cls-1 d9" d="M1093.47,859H1052l-11.26,18.9h-29l62.41-97.3h27.11l23.49,97.3h-27.38Zm-4.17-20.29-6.54-31.56-18.62,31.56Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d10" d="M1141.49,877.06q-9-2.09-14-5.28l9.59-18.49a45.17,45.17,0,0,0,12.23,5.08,54.26,54.26,0,0,0,13.91,1.87q12.09,0,12.09-5.42,0-2.22-2.85-3.27a53.3,53.3,0,0,0-9.11-2,109.32,109.32,0,0,1-13.69-3.27,22.61,22.61,0,0,1-9.38-5.91q-4-4.17-4-11.67,0-13.07,11.19-20.23t29-7.15A75,75,0,0,1,1192,802.9a54.92,54.92,0,0,1,13.06,4.38l-9.31,18.49q-9.45-5.7-22.38-5.7-6.12,0-9.1,1.6c-2,1.07-3,2.43-3,4.1q0,2.22,2.85,3.27a67.08,67.08,0,0,0,9.38,2.29,90.85,90.85,0,0,1,13.41,3.2,22.63,22.63,0,0,1,9.32,6q4,4.17,4,11.4,0,13.07-11.26,20.16t-28.77,7.09A82.32,82.32,0,0,1,1141.49,877.06Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d11" d="M1337.27,808q7.23,6.67,7.23,18.9a46.6,46.6,0,0,1-1,9.31l-8.2,41.7h-26.41L1316.7,839a25.54,25.54,0,0,0,.56-5.28c0-3.33-.82-5.84-2.44-7.5s-4-2.51-7-2.51q-12.65,0-16,16.27l-7.65,37.94h-26.41l7.93-38.92a22.38,22.38,0,0,0,.55-5.14c0-3.33-.81-5.86-2.43-7.57s-4-2.58-7-2.58q-12.8,0-16.12,16.55l-7.51,37.66h-26.41l15-75.33h25l-1.53,7.64a31.43,31.43,0,0,1,22.52-8.89,28.65,28.65,0,0,1,13.48,3.12,21.47,21.47,0,0,1,9.18,9.11,35.63,35.63,0,0,1,12.3-9.11,37.39,37.39,0,0,1,15.36-3.12Q1330,801.31,1337.27,808Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d12" d="M1447.78,802.56l-15,75.33h-25l1.53-7.08a31,31,0,0,1-21.82,8.34,31.38,31.38,0,0,1-15.64-4.11,30.75,30.75,0,0,1-11.74-11.88,36.3,36.3,0,0,1-4.45-18.35,45.1,45.1,0,0,1,5.49-22.17A41.42,41.42,0,0,1,1376,807a38.86,38.86,0,0,1,20.51-5.69q16.4,0,23.07,10.28l1.81-9ZM1409.55,852q5-5.84,5-15.15,0-6.67-3.83-10.56t-10.49-3.9a16.26,16.26,0,0,0-12.93,5.84q-5,5.84-5,15.29,0,6.68,3.82,10.5t10.5,3.82A16.23,16.23,0,0,0,1409.55,852Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d13" d="M1580.24,808q7.23,6.67,7.23,18.9a46.6,46.6,0,0,1-1,9.31l-8.2,41.7h-26.41l7.78-38.92a25.54,25.54,0,0,0,.56-5.28c0-3.33-.82-5.84-2.44-7.5s-4-2.51-7-2.51q-12.64,0-16,16.27l-7.65,37.94h-26.41l7.93-38.92a22.38,22.38,0,0,0,.55-5.14c0-3.33-.81-5.86-2.43-7.57s-4-2.58-7-2.58q-12.79,0-16.12,16.55l-7.51,37.66h-26.41l15-75.33h25l-1.53,7.64a31.43,31.43,0,0,1,22.52-8.89,28.65,28.65,0,0,1,13.48,3.12,21.47,21.47,0,0,1,9.18,9.11,35.63,35.63,0,0,1,12.3-9.11,37.39,37.39,0,0,1,15.36-3.12Q1573,801.31,1580.24,808Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d14" d="M1690.75,802.56l-15,75.33h-25l1.53-7.08a31,31,0,0,1-21.82,8.34,31.38,31.38,0,0,1-15.64-4.11A30.75,30.75,0,0,1,1603,863.16a36.3,36.3,0,0,1-4.45-18.35,45.1,45.1,0,0,1,5.49-22.17A41.42,41.42,0,0,1,1619,807a38.86,38.86,0,0,1,20.51-5.69q16.39,0,23.07,10.28l1.81-9ZM1652.52,852q5-5.84,5-15.15,0-6.67-3.83-10.56t-10.49-3.9a16.26,16.26,0,0,0-12.93,5.84q-5,5.84-5,15.29,0,6.68,3.82,10.5t10.49,3.82A16.23,16.23,0,0,0,1652.52,852Z" transform="translate(-246.89 -764.14)" />
                            <path className="cls-1 d15" d="M1833.64,802.56l-41.15,75.33h-26.13l-7.09-41-22.1,41h-25.85l-12.79-75.33h24.19l6.81,45.31,24.88-45.31h22.65l7,45.31,24.89-45.31Z" transform="translate(-246.89 -764.14)" />
                        </svg>
                    </span>
                    <span className="prof">Graphic Designer, Artist, Visual Arts</span>
                </div>
            </div>
            
        </div>
    )
}

export default Hero

import React from 'react'
import pic from './../../../../Assets/img/social.jpg';
import Hero from './Hero/Hero';

function Home() {
    return (
        <div>
            <div className="hero-con">
                <Hero />
            </div>
            <div className="rest-con">
                <div className="profile">
                    <div className="img">
                        <img src={pic} alt="pfp" />
                    </div>
                    <div className="name">Estifanos Asmamaw <span>(niq)</span></div>
                    <div className="info">
                        <div className="list">
                            <span className="left">Age: </span>
                            <span className="right">19</span>
                        </div>
                        <div className="list">
                            <span className="left">Occupation: </span>
                            <span className="right">Student</span>
                        </div>
                        <div className="list">
                            <span className="left">Residence: </span>
                            <span className="right">Addis ababa</span>
                        </div>
                        <div className="list">
                            <span className="left">School: </span>
                            <span className="right">Addis collage</span>
                        </div>
                        <div className="list">
                            <span className="left">Major: </span>
                            <span className="right">Architecture</span>
                        </div>
                        <div className="list">
                            <span className="left">Age: </span>
                            <span className="right">19</span>
                        </div>
                        <div className="list">
                            <span className="left">Age: </span>
                            <span className="right">19</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

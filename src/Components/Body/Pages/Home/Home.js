import React from 'react';
import './Home.css';
import Hero from './Hero/Hero';
import Bottom from './Bottom/Bottom';

function Home() {
    
    return (
        <div>
            <div className="hero-con">
                <Hero />
            </div>
            <div className="rest-con home">
                <Bottom />
            </div>
        </div>
    )
}

export default Home

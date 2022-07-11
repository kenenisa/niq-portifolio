import React from 'react'
import './Body.css';
import Polar from './Polar/Polar';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import Blog from './Pages/Blog/Blog';
import Modal from './Modal/Modal';
import Projects from './Pages/Projects/Projects';
import Socials from './Pages/Socials/Socials';
//
function Body({ page }) {
    const openModal = (id) => {
        window.location.assign('/?page=Modal&v=' + (id - 1))
    }
    const Router = () => {
        if (page === 'Gallery') {
            return <Gallery openModal={openModal} />
        } else if (page === 'Blog') {
            return <Blog />
        } else if (page === 'Modal') {
            return <Modal />
        } else if (page === 'Projects') {
            return <Projects />
        } else if (page === 'Socials') {
            return <Socials />
        } else {
            return <Home />
        }
    }
    return (
        <div className="body-con">
            <Polar />
            <Router />
            <div className="telet">
                <img src="./img/web.png" alt="telet" />
            </div>
        </div>
    )
}

export default Body

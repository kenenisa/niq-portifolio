import React, { useState } from 'react'
import './Body.css';
import Polar from './Polar/Polar';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import Blog from './Pages/Blog/Blog';
import Modal from './Modal/Modal';
import Data from './../../Assets/data.json';
//
function Body({ page }) {
    const openModal = (id) => {
        window.location.assign('/?page=Modal&v='+id)
    }
    const Router = () => {
        if (page === 'Gallery') {
            return <Gallery openModal={openModal} />
        } else if (page === 'Blog') {
            return <Blog />
        } else if (page === 'Modal') {
            return <Modal />
        } else {
            return <Home />
        }
    }
    return (
        <div className="body-con">
            <Polar />
            <Router />
        </div>
    )
}

export default Body

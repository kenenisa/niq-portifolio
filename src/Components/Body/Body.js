import React from 'react'
import './Body.css';
import Polar from './Polar/Polar';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import Blog from './Pages/Blog/Blog';
import Modal from './Modal/Modal';
import Projects from './Pages/Projects/Projects';
import Socials from './Pages/Socials/Socials';
import {
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
//
function Body({ page }) {
    const navigate = useNavigate();
    const openModal = (id) => {
        navigate("/modal/" + (id - 1))
        // window.location.assign('/?page=Modal&v=' + (id - 1))
    }
    const Router = () => {
        return (
            <Routes>
                <Route path="/gallery" element={<Gallery openModal={openModal} />}></Route>
                <Route path="/blog" element={<Blog />}>
                </Route>
                <Route path="/modal/:id" element={<Modal />}>
                </Route>
                <Route path="/projects" element={<Projects />}>
                </Route>
                <Route path="/socials" element={<Socials />}>
                </Route>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        );
    }
    return (
        <div className="body-con">
            <Polar />
            <Router />
            <div className="telet">
                <img src={window.location.origin + "/img/web.png"} alt="telet" />
            </div>
        </div>
    )
}

export default Body

import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
//
//
function Header({ page }) {
    const [hidden, setHidden] = useState(true);
    const [contact, setContact] = useState(false);
    const navigate = useNavigate();
    const path = useLocation();
    window.onscroll = (e) => {
        if (window.scrollY > 200) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    }
    const handleRedirect = (e) => {
        if (!window.location.origin.includes("estifanosasmamaw")) {
            navigate(e.target.innerHTML.toString().toLowerCase())
        }
    }
    return (
        <div className={`header ${hidden ? 'hide' : 'show'} ${window.location.href.includes('Modal') && 'shadow'}`}>
            <div className="left">
                {path.pathname.includes('modal') ?
                    <button className="menu" onClick={() => navigate(-1)}>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    :
                    <button className="menu" onClick={() => navigate("/")}>
                        <img src={"/img/logo.png"} alt="logo" />
                    </button>
                }
            </div>
            <div className="right">
                <span>
                    <a href="/gallery">
                        <button onClick={handleRedirect}>Gallery</button>
                    </a>
                    <a href="/blog">
                        <button onClick={handleRedirect}>Blog</button>
                    </a>
                    <a href="/projects">
                        <button onClick={handleRedirect}>Projects</button>
                    </a>
                    <a href="/socials">
                        <button onClick={handleRedirect}>Socials</button>
                    </a>
                </span>
                <button onClick={() => setContact(!contact)} className="contact-btn">Contact</button>
                <div className={`contact-bg ${contact && 'show-bg'}`} onClick={() => setContact(false)}></div>
                <div className={`contact-dialog ${contact && 'show-dialog'}`}>
                    <a href="tel:+25101577447">
                        <div className="contact-item">
                            <div className="type">Call</div>
                            <div className="disc">+25101577447</div>
                            <div className="img">
                                <img src={"/img/call.jpg"} alt="call contact" />
                            </div>
                        </div>
                    </a>
                    <a href="https://t.me/Estifoniq">
                        <div className="contact-item">
                            <div className="type">Direct message</div>
                            <div className="disc">@Estifoniq</div>
                            <div className="img">
                                <img src={"/img/telegram.png"} alt="message contact" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header

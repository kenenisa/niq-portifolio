import React, { useState } from 'react'
import './Header.css';
//
function Header({ page }) {
    const [hidden, setHidden] = useState(true);
    const [contact, setContact] = useState(false);
    window.onscroll = (e) => {
        if (window.scrollY > 200) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    }
    const handleRedirect = (e) => {
        window.location.assign('/?page=' + e.target.innerHTML)
    }
    return (
        <div className={`header ${hidden ? 'hide' : 'show'} ${window.location.href.includes('Modal') && 'shadow'}`}>
            <div className="left">
                {window.location.search.includes('Modal') ?
                    <button className="menu" onClick={(e) => window.location.assign(window.location.pathname.split('?')[0] + '?page=Gallery')}>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    :
                    <button className="menu" onClick={(e) => window.location.assign(window.location.pathname.split('?')[0])}>
                        <img src="./img/logo.png" alt="logo"/>
                    </button>
                }
            </div>
            <div className="right">
                <span>
                    <button onClick={handleRedirect}>Gallery</button>
                    <button onClick={handleRedirect}>Blog</button>
                    <button onClick={handleRedirect}>Projects</button>
                    <button onClick={handleRedirect}>Socials</button>
                </span>
                <button onClick={() => setContact(!contact)} className="contact-btn">Contact</button>
                <div className={`contact-bg ${contact && 'show-bg'}`} onClick={() => setContact(false)}></div>
                <div className={`contact-dialog ${contact && 'show-dialog'}`}>
                    <a href="tel:+25101577447">
                        <div className="contact-item">
                            <div className="type">Call</div>
                            <div className="disc">+25101577447</div>
                            <div className="img">
                                <img src="./img/call.jpg" alt="call contact" />
                            </div>
                        </div>
                    </a>
                    <a href="https://t.me/Estifoniq">
                        <div className="contact-item">
                            <div className="type">Direct message</div>
                            <div className="disc">@Estifoniq</div>
                            <div className="img">
                                <img src="./img/telegram.png" alt="message contact" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
import React, { useState } from 'react'
import './Header.css';
//
function Header({ page }) {
    const [hidden, setHidden] = useState(true);
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
        <div className={`header ${hidden ? 'hide' : 'show'}`}>
            <div className="left">
                {window.location.search.includes('Modal') ?
                    <button className="menu" onClick={(e) => window.location.assign(window.location.pathname.split('?')[0] + '?page=Gallery')}>
                        <i className="fa fa-arrow-left"></i>
                    </button>
                    :
                    <button className="menu" onClick={(e) => window.location.assign(window.location.pathname.split('?')[0])}>
                        <i className="fa fa-home"></i>
                    </button>
                }
            </div>
            <div className="right">
                <span>
                    <button onClick={handleRedirect}>Gallery</button>
                    <button onClick={handleRedirect}>Blog</button>
                    <button onClick={handleRedirect}>Projects</button>
                    <button onClick={handleRedirect}>Social media</button>
                </span>
                <button>Contact</button>
            </div>
        </div>
    )
}

export default Header

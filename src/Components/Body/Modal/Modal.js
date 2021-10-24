import React, { useEffect, useState } from 'react'
import './Modal.css'
import Data from './../../../Assets/data.json';
import Post from './../Pages/Blog/Post/Post';
//
function Modal() {
    const [value, setValue] = useState({});
    useEffect(() => {
        const dir = window.location;
        if (dir.search.includes("v")) {
            const v = dir.search.split('v=')[1].split('&')[0];
            setValue(Data.gallery[v]);
        }
    }, []);
    return (
        <div className="modal">
            <Post data={value}  disableReactions={true}/>
        </div>
    )
}

export default Modal

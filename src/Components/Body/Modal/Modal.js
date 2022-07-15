import React, { useEffect, useState } from 'react'
import './Modal.css'
import Post from './../Pages/Blog/Post/Post';
//
function Modal() {
    const [value, setValue] = useState({});
    useEffect(() => {
        const dir = window.location;
        if (dir.search.includes("v")) {
            const v = decodeURIComponent(dir.search.split('?v=')[1]);
            console.log(v);
            setValue(window.data.gallery.find(i => i.id === (Number(v) + 1)));
        }
    }, []);
    return (
        <div className="modal">
            <Post data={value} disableReactions={true} />
        </div>
    )
}

export default Modal

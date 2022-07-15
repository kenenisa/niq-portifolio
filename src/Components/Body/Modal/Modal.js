import React, { useEffect, useState } from 'react'
import './Modal.css'
import Post from './../Pages/Blog/Post/Post';
import { useParams } from 'react-router-dom';

//
function Modal() {
    const [value, setValue] = useState({});
    const param = useParams();

    useEffect(() => {
        const v = param.id
        setValue(window.data.gallery.find(i => i.id === (Number(v) + 1)));
    }, [param.id]);
    return (
        <div className="modal">
            <Post data={value} disableReactions={true} id={param.id}/>
        </div>
    )
}

export default Modal

import React, { useRef } from 'react'
import './Tile.css';
//
function Tile({ img,title, i,ii,openModal }) {
    const imgRef = useRef(null); 
    return (
        <div className={`tile ${imgRef.current && ((imgRef.current.naturalHeight - imgRef.current.naturalWidth) > 50 && 'vertical')}`} style={{ animationDelay: (ii * 0.2) + 's' }} onClick={()=>openModal(i)} >
            <img src={img} alt={title} ref={imgRef}/>
        </div>
    )
}

export default Tile

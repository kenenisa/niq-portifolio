import React from 'react'
import './Tile.css';
//
function Tile({ img, i,openModal }) {

    return (
        <div className="tile" style={{ animationDelay: (i * 0.2) + 's' }} onClick={()=>openModal(i)}>
            <img src={img} alt="gallery item" />
        </div>
    )
}

export default Tile

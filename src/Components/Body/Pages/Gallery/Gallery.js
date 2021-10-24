import React from 'react'
import './Gallery.css'
import Tile from './Tile/Tile';
import Data from './../../../../Assets/data.json';
//
function Gallery({openModal}) {
    const Tiles = ({openModal}) => {
        return (
            <React.Fragment>
                {Data.gallery.map((item, key) => {
                    return <Tile img={'./img/gallery/' + (item.id) + '.jpg'} i={key} openModal={openModal} />
                })}
            </React.Fragment>
        )
    }

    return (
        <div className="gallery page">
            <span className="head">Gallery</span>
            <div className="tiles">
                <Tiles openModal={openModal}/>
            </div>
        </div>
    )
}

export default Gallery

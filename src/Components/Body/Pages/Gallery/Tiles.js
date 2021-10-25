import React from 'react'
import Tile from './Tile/Tile';

function Tiles({ data, openModal }) {
    if (data.length) {

        return (
            <React.Fragment>
                {data.map((item, key) => {
                    return <Tile img={'./img/gallery/' + (item.id) + '.jpg'} i={key} key={key} openModal={openModal} />
                })}
            </React.Fragment>
        )
    } else {
        return <div className="empty-list">Nothing to show here</div>
    }
}

export default Tiles

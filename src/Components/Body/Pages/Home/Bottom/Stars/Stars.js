import React from 'react'
import './Stars.css'
function Stars({ review }) {
    const x = [1, 2, 3, 4, 5];
    return (
        <div className="star">
            {x.map((i, key) =>
                <i className={`${i <= review ? 'fa' : 'far'} fa-star `} key={key}></i>)}
        </div>
    )
}

export default Stars

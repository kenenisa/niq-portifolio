import React, { useEffect, useState } from 'react'
import Tile from './Tile/Tile';
import { BottomScrollListener } from 'react-bottom-scroll-listener';

function Tiles({ data, openModal, taggedNow }) {
    const hideItems = (item) => {
        if (!window.location.search.includes('&tag=') || !taggedNow) {
            return !item.hide;
        }
        return true;
    }
    const [visible, setVisible] = useState(data.filter(hideItems).slice(0, 15));
    useEffect(() => {
        setVisible(data.filter(hideItems).slice(0, 15))
        // eslint-disable-next-line
    }, [data, taggedNow]);

    const scrollAble = document.getElementById("gallery")
    const seeMore = () => {

        if (scrollAble.scrollHeight - (window.scrollY + window.innerHeight) < 300) {
            setVisible(visible.concat(data.slice(visible.length + 1, visible.length + 16)))
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', seeMore, false)
        return () => {
            window.removeEventListener('scroll', seeMore, false)
        }
        // eslint-disable-next-line
    }, [visible, scrollAble]);

    if (data.length) {

        return (
            <React.Fragment>
                <BottomScrollListener onBottom={console.log} />

                {visible
                    .map((item, key) => {
                        return <Tile img={'https://kenenisa.github.io/niq-portifolio/img/gallery/tumbnail/' + (item.id) + '.jpg'} title={item.title} i={item.id} ii={key % 15} key={key} openModal={openModal} />
                    })}
            </React.Fragment>
        )
    } else {
        return <div className="empty-list">Nothing to show here</div>
    }
}

export default Tiles

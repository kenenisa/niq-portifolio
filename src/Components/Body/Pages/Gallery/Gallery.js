import React, { useState, useRef, useEffect } from 'react'
import './Gallery.css'
import Data from './../../../../Assets/data.json';
import Tiles from './Tiles';
//
function Gallery({ openModal }) {
    const data = Data.gallery;
    const [searchTag, setSearchTag] = useState('');
    const [showTagList, setShowTagList] = useState(false);
    const [renderData, setRenderData] = useState(data);
    const [tagList, setTagList] = useState([]);
    const [renderTagList, setRenderTagList] = useState(tagList);
    const tagInput = useRef(null);

    useEffect(() => {
        setRenderTagList(tagList);
    }, [tagList])
    useEffect(() => {
        let list = [];
        data.forEach(item => {
            item.tag.split(',').forEach(i => {
                const x = i.trim().toLowerCase();
                if (x) {
                    const found = list.find(y => y.name === x);
                    if (found) {
                        list = list.filter(y => y.name !== x);
                        list.push({ name: x, count: found.count + 1 });
                    } else {
                        list.push({ name: x, count: 1 });
                    }
                }
            })
        })
        list.sort((x, y) => y.count - x.count)
        setTagList(list.map(item => {
            item.name = item.name.slice(0, 1).toUpperCase() + item.name.slice(1)
            return item;
        }));

    }, []);
    useEffect(() => {
        const dir = window.location;
        if (dir.search.includes('tag=')) {
            console.log('found');
            const t = dir.search.split('tag=')[1].split('&')[0].replace(/(%20)/g,' ');
            setShowTagList(true);
            setSearchTag(t)
        }
    },[])
    useEffect(() => {
        console.log(renderData);
    }, [renderData]);
    useEffect(() => {
        if (searchTag === '') {
            setRenderData(data);
            setRenderTagList(tagList)
        } else {
            setRenderData(data.filter(item => {
                const tags = []
                item.tag.split(',').forEach(i => tags.push(i.trim().toLowerCase()));
                return !!tags.find(i => i.includes(searchTag.toLowerCase()))
            }));
            setRenderTagList(tagList.filter(item => {
                return item.name.toLowerCase().includes(searchTag.toLowerCase())
            }))
        }
    }, [searchTag])
    useEffect(() => {
        if (tagInput.current) {
            tagInput.current.onfocus = (e) => {
                setShowTagList(true);
            }
            // tagInput.current.onblur = (e) => {
            //     setShowTagList(false);
            // }
        }
    }, [tagInput])
    const TagList = () => {
        return (
            <React.Fragment>
                {
                    renderTagList.map((item, key) => {
                        return (<span className="list-item" key={key} onClick={() => setSearchTag(item.name)}>
                            <span>#{item.name}</span> ({item.count})
                        </span>)
                    })
                }
            </React.Fragment>
        )
    }
    const handleInput = (e) => {
        setSearchTag(e.target.value)
    }
    return (
        <div className="gallery page">
            <span className="head">Gallery</span>
            <div className="tag-search">
                {(showTagList && renderTagList[0]) &&
                    <div className="tag-list">
                        <TagList />
                    </div>
                }
                <input
                    ref={tagInput}
                    type="text"
                    value={searchTag}
                    onChange={handleInput}
                    placeholder="Search by Tags"
                />
            </div>
            <div className="tiles">
                <Tiles openModal={openModal} data={renderData} />
            </div>
        </div>
    )
}

export default Gallery

import React, { useState, useRef, useEffect } from 'react'
import StringToColor from '../../../../Util/colorHash';
import './Gallery.css'
import Tiles from './Tiles';
//
function Gallery({ openModal }) {
    const data = window.data.gallery;
    const [searchTag, setSearchTag] = useState('');
    const [showTagList, setShowTagList] = useState(false);
    const [renderData, setRenderData] = useState(data);
    const [tagList, setTagList] = useState([]);
    const [taggedNow, setTaggedNow] = useState(false);
    const [renderTagList, setRenderTagList] = useState(tagList);
    const [openTagsModal, setOpenTagsModal] = useState(false);
    const tagInput = useRef(null);

    useEffect(() => {
        setRenderTagList(tagList);
    }, [tagList])
    useEffect(() => {
        let list = [];
        const dir = window.location;
        const show = dir.search.includes('tag=');
        data.forEach(item => {
            if (!item.hide || show) {
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
            }
        })
        list.sort((x, y) => y.count - x.count)
        setTagList(list.map(item => {
            item.name = item.name.slice(0, 1).toUpperCase() + item.name.slice(1)
            return item;
        }).filter(i => i.name !== ''));

    }, [data]);
    useEffect(() => {
        const dir = window.location;
        if (dir.search.includes('tag=')) {
            const t = dir.search.split('tag=')[1].split('&')[0].replace(/(%20)/g, ' ');
            setShowTagList(true);
            setSearchTag(decodeURIComponent(t));
            setTaggedNow(true)
        }
    }, [])
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
    }, [searchTag, data, tagList])
    useEffect(() => {
        if (tagInput.current) {
            tagInput.current.onfocus = (e) => {
                setShowTagList(true);
            }
            // tagInput.current.onblur = (e) => {
            // setShowTagList(false);
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
    const handleTagSelect = (name) => {
        setSearchTag(name)
        setOpenTagsModal(false)
    }
    const Tags = () => {
        return (
            <React.Fragment>
                <div
                    className="tags-item"
                    onClick={() => handleTagSelect("")}
                    style={{
                        animationDelay: 300 + 'ms'
                    }}
                >
                    All
                    <span>{data.length}</span>
                </div>
                {

                    tagList.map((item, key) => (
                        <div
                            key={key}
                            className="tags-item"
                            onClick={() => handleTagSelect(item.name)}
                            style={{
                                background: StringToColor(item.name),
                                animationDelay: ((25 * (key + 2)) + 275) + 'ms'
                            }}
                        >
                            {item.name}
                            <span>{item.count}</span>
                        </div>
                    ))
                }
            </React.Fragment>
        )
    }

    const handleInput = (e) => {
        setSearchTag(e.target.value)
    }
    const handleInputClick = () => {
        setSearchTag('');
        setTaggedNow(false);
    }
    return (
        <div className="gallery page" id="gallery">
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
                    onClick={handleInputClick}
                    placeholder="Search by Tags"
                />
                <div className='tag-drop'>
                    <button onClick={() => setOpenTagsModal(true)}>
                        <i className='fa fa-tag'></i>
                        <span>Tags</span>
                    </button>
                </div>
            </div>
            {openTagsModal ?
                <div className='tags'>
                    <div className="tags-dis" onClick={() => setOpenTagsModal(false)}></div>
                    <div className='tags-con'>
                        <Tags />
                    </div>
                </div>
                :
                <div className="tiles">
                    <Tiles openModal={openModal} data={renderData} taggedNow={taggedNow} />
                </div>
            }
        </div>
    )
}

export default Gallery

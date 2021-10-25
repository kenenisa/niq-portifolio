import React, { useEffect } from 'react'
import './Blog.css'
//
import Post from './Post/Post'
import Data from './../../../../Assets/data.json';
//
function Blog() {
    const Posts = () => {
        const dir = window.location;

        if (dir.search.includes("b")) {
            const b = dir.search.split('b=')[1].split('&')[0];
            return (
                <React.Fragment>
                    <Post data={Data.blog[Number(b)]} i={Number(b)} />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    {Data.blog.map((item, key) => {
                        return <Post data={item} key={key} i={key} />
                    })}
                </React.Fragment>
            )
        }
    }
    return (
        <div className="blog page">
            <span className="head">Blog</span>
            <div className="blog-list">
                <Posts />
            </div>
        </div>
    )
}

export default Blog

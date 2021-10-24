import React from 'react'
import './Blog.css'
//
import Post from './Post/Post'
import Data from './../../../../Assets/data.json';
//
function Blog() {
    const Posts = () => {
        return (
            <React.Fragment>
                {Data.blog.map((item, key) => {
                    return <Post data={item} key={key}/>
                })}
            </React.Fragment>
        )
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

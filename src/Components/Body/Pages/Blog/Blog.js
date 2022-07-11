import React, { useEffect, useState } from 'react'
import './Blog.css'
//
import Post from './Post/Post'
import request from './../../../../Util/request';
//
function Blog() {
    const [likes, setLikes] = useState([]);
    useEffect(() => {
        request('blog-res').then(res => {
            if (!res) return;
            setLikes(res.likes);
        })
    }, []);
    const Posts = () => {
        const dir = window.location;

        if (dir.search.includes("b")) {
            const b = Number(dir.search.split('b=')[1].split('&')[0]);
            const blogItem = window.data.blog[b]
            return (
                <React.Fragment>
                    <Post data={blogItem} i={b} likeCount={likes.find(l => l.item === blogItem.id)} />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    {window.data.blog.map((item, key) => {
                        return <Post data={item} key={key} i={key} likeCount={likes.find(l => l.item === item.id)} />
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

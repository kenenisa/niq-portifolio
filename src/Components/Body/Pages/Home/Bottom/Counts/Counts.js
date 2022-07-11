import React, { Fragment, useEffect, useState } from 'react'

function Counts({visible}) {
    const [counts, setCounts] = useState({ media: 0, posts: 0, projects: 0 });
    const data = window.data;

    useEffect(() => {
        if (visible && counts.media === 0) {
            const { gallery, blog, projects } = data;
            for (let i = 0; i < Math.max(gallery.length, blog.length, projects.length) + 1; i++) {
                setTimeout(() => {

                    setCounts({
                        media: gallery.length > i ? i : gallery.length,
                        posts: blog.length > i ? i : blog.length,
                        projects: projects.length > i ? i : projects.length,
                    })
                }, i * 40)
            }
        }
    }, [visible, counts.media, data]);
    return (
        <Fragment>
            <div className="item">
                <div>{counts.media}</div>
                <span>Media</span>
            </div>
            <div className="item">
                <div>{counts.posts}</div>
                <span>Posts</span>
            </div>
            <div className="item last">
                <div>{counts.projects}</div>
                <span>Projects</span>
            </div>
        </Fragment>
    )
}

export default Counts

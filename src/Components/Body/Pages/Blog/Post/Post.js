import React, { useState } from 'react'
import './Post.css'


function Post({ data, disableReactions, i }) {
    const [like, setLike] = useState(false);
    const [share, setShare] = useState(false);
    const handleLike = () => setLike(!like);
    const handleShare = () => {
        setShare(true);
        setTimeout(() => {
            setShare(false);
        }, 5000);
        window.navigator.clipboard.writeText(window.location.href + '&b=' + i)
    }
    return (
        <div className="post">
            <div className="img-con">
                <img src={'./img/gallery/' + (data.id) + '.jpg'} alt="post" />
            </div>
            <div className="text-con">
                <div className="title">{data.title}</div>
                <div className="description">
                    {data.body}
                </div>
                {!disableReactions ?
                    <div className="reactions">
                        <div className={`btn like ${like && 'liked'}`} onClick={handleLike}>

                            {like ?
                                <React.Fragment>
                                    <div className="for-anime">
                                        <i className="fa fa-heart"></i>
                                    </div>
                                    <i className="fa fa-heart"></i>
                                    <span className="count">30</span>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <i className="far fa-heart"></i>
                                </React.Fragment>

                            }
                        </div>
                        <div className="btn comment">
                            <i className="far fa-comment"></i>
                        </div>
                        <div className="btn share" onClick={handleShare}>
                            <div className={`alert ${share && 'show'}`}>
                                Link copied! You can paste it anywhere to share it.
                            </div>
                            <i className="fa fa-share"></i>
                        </div>
                    </div>
                    :
                    <div className="tags">
                        {
                            data.tag?.split(',').map((item) => {
                                item = item.trim()
                                return (
                                    <a href={`/?page=Gallery&tag=${item}`}>
                                        <span className="tag">#{item}</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )


}

export default Post

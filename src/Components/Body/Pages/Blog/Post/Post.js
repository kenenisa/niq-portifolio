import React, { useState } from 'react'
import './Post.css'


function Post({ data, disableReactions }) {
    const [like, setLike] = useState(false);
    const handleLike = () => setLike(!like)
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
                {!disableReactions &&
                    <div className="reactions">
                        <div className={`btn like ${like && 'liked'}`} onClick={handleLike}>

                            {like ?
                                <React.Fragment>
                                    <div className="for-anime">
                                        <i className="fa fa-heart"></i>
                                    </div>
                                    <i className="fa fa-heart"></i>
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
                        <div className="btn share">
                            <i className="fa fa-share"></i>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Post

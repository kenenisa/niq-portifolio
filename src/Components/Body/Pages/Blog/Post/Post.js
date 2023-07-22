import React, { Fragment, useEffect, useState } from 'react'
import request from '../../../../../Util/request';
import './Post.css'


function Post({ data, disableReactions, i, likeCount,id }) {
    const [like, setLike] = useState(false);
    const [share, setShare] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const [commented, setCommented] = useState(false);
    const [count, setCount] = useState('');
    const [text, setText] = useState('');
    const [email, setEmail] = useState(null);
    const [alert, setAlert] = useState(false);
    const handleLike = () => {
        setLike(!like);
        let likes = JSON.parse(localStorage.likes || null) || [];
        if (!like) {

            request('like/' + data.id).then(res => {
                if (!res) return;
                likes.push({
                    id: data.id,
                    c: res.count
                });
                setCount(res.count);
                localStorage.likes = JSON.stringify(likes);

            })
        } else {
            request('unlike/' + data.id).then(res => {
                if (!res) return;
                likes = likes.filter(l => l.id !== data.id);
                setCount(res.count);
                localStorage.likes = JSON.stringify(likes);
            })
        }
    }
    const handleOpenComment = () => {
        if (!openComment) {
            setOpenComment(true);
        }
    }
    const handleComment = () => {
        if (text !== '') {
            request('comment', true, { text, email, id: data.id }).then(res => {
                if (res.ok) {
                    setCommented(true);
                    setAlert(true);
                    setTimeout(() => {
                        setAlert(false);
                    }, 5500);
                }
            })
            setOpenComment(false);
        }
    }
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleShare = () => {
        setShare(true);
        setTimeout(() => {
            setShare(false);
        }, 5000);
        window.navigator.clipboard.writeText(window.location.href + '?b=' + i)
    }
    const checkLike = () => {
        const likes = localStorage.likes;
        if (likes) {
            const found = JSON.parse(likes).find(l => l.id === data.id)
            if (found) {
                setCount(found.c)
            }
            return found;
        }
        return false;
    }
    useEffect(() => {
        if (checkLike()) {
            setLike(true);
        }
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (likeCount) {
            let likes = JSON.parse(localStorage.likes || null) || [];
            likes = likes.filter(l => l.id !== data.id);
            likes.push({
                id: likeCount.item,
                c: likeCount.count
            });
            setCount(likeCount.count);
            localStorage.likes = JSON.stringify(likes);
        }
    }, [likeCount, data.id]);
    return (
        <div className="post">
            {alert && <div className="alert">Comment added successfully!</div>}
            <div className="img-con">
                <img src={ 'https://kenenisa.github.io/niq-portifolio/img/gallery/' + (data.id) + '.jpg'} alt="post" />
                {disableReactions && (
                <div className="quality">
                    <a href={`https://kenenisa.github.io/niq-high-quality/${data.id}.jpg`} target="_blank" rel="noreferrer">
                        <button className="open-high">
                            <i className="fas fa-external-link-alt"></i> View high quality
                        </button>
                    </a>
                </div>
                )}
            </div>
            <div className="text-con">
                <div className="title">{data.title}</div>
                <div className="description" dangerouslySetInnerHTML={{ __html: data.body }}>
                </div>
                {!disableReactions ?
                    <div className="reactions">
                        <div className={`btn like ${like && 'liked'}`} onClick={handleLike}>

                            {like ?
                                <Fragment>
                                    <div className="for-anime">
                                        <i className="fa fa-heart"></i>
                                    </div>
                                    <i className="fa fa-heart"></i>
                                    <span className="count">{count}</span>
                                </Fragment>
                                :
                                <Fragment>
                                    <i className="far fa-heart"></i>
                                </Fragment>

                            }
                        </div>
                        <div className="btn comment" onClick={handleOpenComment}>
                            {commented ?
                                <i className="fa fa-comment"></i>

                                :
                                <i className="far fa-comment"></i>
                            }
                            {openComment &&
                                <Fragment>
                                    <div className="comment-bg" onClick={() => setOpenComment(false)}></div>
                                    <div className="comment-section">
                                        <div className="comment-head">Comment Ahead!</div>
                                        <textarea onChange={handleTextChange} cols="10" rows="5" placeholder="Write it down here"></textarea>
                                        <input onChange={handleEmailChange} type="email" placeholder="Optional email" />
                                        <button onClick={handleComment}>Submit</button>
                                    </div>
                                </Fragment>
                            }
                        </div>
                        <div className="btn share" onClick={handleShare}>
                            <div className={`alert-share ${share && 'show'}`}>
                                Link copied! You can paste it anywhere to share it.
                            </div>
                            <i className="fa fa-share"></i>
                        </div>
                    </div>
                    :
                    <div className="tags">
                        {
                            data.tag?.split(',').map((item, key) => {
                                item = item.trim()
                                if (item !== '') {
                                    return (
                                        <a key={key} href={`/gallery?tag=${encodeURIComponent(item)}`}>
                                            <span className="tag">#{item}</span>
                                        </a>
                                    )
                                }
                                return '';
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )


}

export default Post

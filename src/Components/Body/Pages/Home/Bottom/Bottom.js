import React, { useEffect, useState } from 'react'
import Counts from './Counts/Counts'
import Stars from './Stars/Stars';
import request from './../../../../../Util/request';
//
function Bottom() {
    const [visible, setVisible] = useState(false);
    const [visitCount, setVisitCount] = useState(false);
    const seeMore = () => {
        if (window.scrollY < 50) {
            if (visible) {
                setVisible(false)
            }
        } else {
            if (!visible) {
                setVisible(true)
            }
        }
    }
    useEffect(() => {
        request('get-visits').then(visits => {
            if (visits) {
                setVisitCount(visits.amount)
            }
        })
    }, [])
    useEffect(() => {
        // console.log(visible.length + 1, visible.length + 16);
        window.addEventListener('scroll', seeMore, false)
        return () => {
            window.removeEventListener('scroll', seeMore, false)
        }
        // eslint-disable-next-line
    }, [visible]);
    const getColor = (value) => {
        //value from 0 to 1
        value = value - 0.1
        const hue = ((1 - value) * 120).toString(10);
        return ["hsl(", hue, ",70%,42%)"].join("");
    }
    const totalReviews = () => {
        const rv = window.data.reviews
        let total = 0;
        rv.forEach(rating => {
            total += rating.rate
        })
        return Math.ceil(total / rv.length)
    };
    const tr = totalReviews()
    return (
        <div>
            <div className="top">
                <div className={`img ${visible && 'visible'}`}>
                    <img src="./img/uniq.jpg" alt="profile" />
                </div>
                <div className="reviewed">
                    <div>Review ({tr})</div>
                    <Stars review={tr} />
                </div>
                <div className="text">
                    <div className="name">Estifanos Asmamaw</div>
                    <div className="prof">Graphic Designer, Artist, Visual Arts</div>
                    <div className="social-contacts">
                        <span >
                            <i className="fas fa-map-marker-alt"></i> Addis ababa, Ethiopia
                        </span>
                        <a href="https://instagram.com/estifoniq" target="_blank" rel="noreferrer">
                            <span>
                                <i className="fab fa-instagram"></i> @estifoniq
                            </span>
                        </a>
                        <br />
                        <span >
                            <i className="fab fa-twitter"></i> @estifoniq
                        </span>
                        <a href="https://t.me/Estifoniq" target="_blank" rel="noreferrer">
                            <span>
                                <i className="fab fa-telegram"></i> @estifoniq
                            </span>
                        </a>
                        <span>
                            <i className="fab fa-facebook-f"></i> estifoniq
                        </span>
                    </div>
                    <div className="prof address"></div>
                </div>
            </div>
            <div className="counts">
                <Counts visible={visible} />
            </div>
            <div className="latest">
                <div className="head-item">Latest</div>
                {/* <iframe>
                    <script async src="https://telegram.org/js/telegram-widget.js?19" data-telegram-post="creativenetwork/67" data-width="100%"></script>
                </iframe> */}
                <h3>🔥New NFT Collections made by your one and only!
                    <a href='https://www.binance.com/en/nft/profile/betetibebat-67624323b611af5e8d201e1ba7f6823c?category=created' target="_blank" rel="noreferrer">
                        <i>Order Now</i>
                    </a>
                </h3>
                {/* <iframe
                    id="telegram-post-creativenetwork-67"
                    src="https://t.me/creativenetwork/67?embed=1"
                    title="Telegram message"
                    // width="100%"
                    // height=""
                    frameBorder="0"
                    scrolling="no"
                    // style="overflow: hidden; border: none; min-width: 320px; height: 453px;"
                    __idm_id__="2981889"></iframe> */}
                <h3>Winning the PAC Competition 🏆</h3>
                {/* <iframe
                    // width="853"
                    // height="350"
                    src="https://www.youtube.com/embed/_Azo_46RHDk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe> */}
            </div>

            <div className="latest down">
                <div className="head-item">Bio</div>
                <p>
                    Esse dolor ipsum proident pariatur amet veniam. Eiusmod do elit exercitation magna nulla laboris qui commodo do laborum eiusmod ad nulla. Culpa laborum ex aute aliqua elit Lorem qui reprehenderit ut. Officia est ea non elit elit Lorem incididunt mollit aliquip aliqua ut.
                </p>
                <p>
                    Enim aliquip sint eiusmod in culpa id nisi amet laborum consectetur et. Elit et ipsum consequat deserunt sunt aliquip esse excepteur ipsum commodo do deserunt sint. Eu magna in exercitation reprehenderit irure incididunt enim proident mollit laboris ut eu.
                </p>
            </div>
            <div className={`latest down skills ${visible && 'animate'}`}>

                <div className="head-item">Skills</div>
                {window.data.skills.map((skill, key) => {
                    const a = skill.amount

                    return (<div className="skill" key={key}>
                        <div className="graph">
                            <div className="cover" style={{ width: a + '%', background: getColor(1 - (a / 100)) }}></div>
                        </div>
                        <span>{skill.name}</span>
                    </div>
                    )
                })}

            </div>
            <div className="latest down">
                <div className="head-item">Tools</div>
                <div className="skill">
                    <img src="./img/ps.png" alt="tool" />
                </div>
                <div className="skill">
                    <img src="./img/ae.png" alt="tool" />
                </div>
                <div className="skill">
                    <img src="./img/pr.png" alt="tool" />
                </div>
                <div className="skill">
                    <img src="./img/ai.png" alt="tool" />
                </div>
            </div>
            <div className="latest down">
                <div className="head-item">Reviews</div>
                {window.data.reviews.map((review, key) => (
                    <div className="review-item" key={key}>
                        <div className="img">
                            <img src={`./img/reviewers/${review.id}.jpg`} alt="reviewer" />
                        </div>
                        <div className="text">
                            <div className="name">
                                {review.name} <span>{review.type}</span>
                            </div>
                            <div className="review-text" dangerouslySetInnerHTML={{__html:review.text}}></div>
                            <div className="review-stars">
                                <Stars review={review.rate} /><span>{review.rate}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="latest down">

                <div className="visits">
                    <div>{visitCount ? visitCount + 1 : '...'}</div>
                    <span>Visits</span>
                </div>
            </div>
            <div className="credit">Developed by <a href="https://t.me/keni99" rel="noreferrer" target="_blank">@keni99</a>, please report your XP</div>
        </div>
    )
}

export default Bottom

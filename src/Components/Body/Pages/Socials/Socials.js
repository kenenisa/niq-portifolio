import React, { useEffect, useState } from 'react'
import './Socials.css'
import request from './../../../../Util/request';
//
function Socials() {
    const [telegram, setTelegram] = useState(false);
    // eslint-disable-next-line
    const [instagram, setInstagram] = useState({
        "details":
        {
            "title":
                "Estifoniq", "username": "estifoniq", "description": "Proud Graphics Designer ... Telegram acc @estifoniq channel @creativenetwork ... Hmu if u need smtg UNIQ.....",
        }, "pfp": "https://instagram.fadd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/250841792_108848678172218_8082352371055289979_n.jpg?_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_ohc=teNfGaIhTIMAX-xTJl_&edm=ABfd0MgBAAAA&ccb=7-4&oh=890b02c4dbdebeefa863624db895c61e&oe=618DBA08&_nc_sid=7bff83",
        "count": 129, "likes": 281
    });

    useEffect(() => {
        request('socials').then(e => {
            if (e) {
                setTelegram(e.telegram)
            } else {
                setTelegram(null);
            }
        })

    }, []);

    // useEffect(() => {
    //     console.log(JSON.stringify(telegram));
    // }, [telegram])
    return (
        <div className="socials page">
            <div className="head">Social Media</div>
            {instagram &&
                <div className="con">
                    <div className="media">
                        <img src="https://estifanosasmamaw.ml/img/uniq-insta.jpg" alt="uniq" />
                        <div className="brand-icon">
                            <img src={ 'https://estifanosasmamaw.ml/img/instagram.png'} alt="instagram" />
                        </div>
                    </div>
                    <div className="text">
                        <span className="brand">Instagram • </span>
                        <span className="account">{instagram.details.title}</span>
                    </div>
                    <div className="username">@{instagram.details.username}</div>
                    <div className="dis">{instagram.details.description}</div>
                    <div className="count">
                        <div className="num">{instagram.count}</div>
                        <div className="sub">followers</div>
                    </div>
                    <div className="count v2">
                        <div className="num">{instagram.likes}</div>
                        <div className="sub">likes</div>
                    </div>
                    <div className="join follow">
                        <a href="https://instagram.com/estifoniq">
                            <button>Follow</button>
                        </a>
                    </div>
                </div>
            }
            {
                telegram === null ? '' : (
                    telegram ?
                        <div className="con">
                            <div className="media">
                                <img src="https://estifanosasmamaw.ml/img/uniq.jpg" alt="uniq" />
                                <div className="brand-icon">
                                    <img src={ 'https://estifanosasmamaw.ml/img/telegram.png'} alt="telegram" />
                                </div>
                            </div>
                            <div className="text">
                                <span className="brand">Telegram • </span>
                                <span className="account">{telegram.details.title}</span>
                            </div>
                            <div className="username">@{telegram.details.username}</div>
                            <div className="dis">{telegram.details.description}</div>
                            <div className="count">
                                <div className="num">{telegram.count}</div>
                                <div className="sub">Subscribers</div>
                            </div>
                            <div className="join">
                                <a href="https://t.me/creativenetwork">
                                    <button>Join</button>
                                </a>
                            </div>
                        </div>
                        : (
                            <div className="con">
                                <h5>Loading data from telegram...</h5>
                            </div>
                        ))}

        </div>
    )
}

export default Socials


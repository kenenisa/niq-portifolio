import React, { Fragment } from 'react'
import './Projects.css'
//
function Projects() {
    const data = window.data.projects;
    const RenderProject = () => {
        return (<Fragment>
            {data.map((item, key) => (
                <div className={`project ${key % 2 === 0 ? 'even' : 'odd'}`} key={key} >
                    <div className="text" style={{ animationDelay: ((key * 0.9) + 2) + 's' }}>
                        <div className="title" >{item.title}</div>
                        <div className="belongs" style={{ animationDelay: ((key * 0.9) + 2) + 's' }}>{item.belongs}</div>
                        <div className="body">{item.body}</div>
                        <div className="time" style={{ animationDelay: ((key * 0.9) + 2) + 's' }}>
                            <span className="start">{item.start}</span>
                            <span className="end">{item.end}</span>
                        </div>
                    </div>
                    <div className="deception" style={{ animationDelay: ((key * 0.9) + 1) + 's' }}></div>
                    <div className="img">
                        <img src={ 'https://kenenisa.github.io/niq-portifolio/img/projects/' + item.id + '.jpg'} alt="project" />
                    </div>
                </div>
            ))}
        </Fragment>)
    }
    return (
        <div className="projects page">
            <span className="head">Projects</span>
            <div className="pro-list">
                <RenderProject />
            </div>
        </div>
    )
}

export default Projects

import React from 'react';

function SlideContent({ title, description, link, repoLink, image }) {
    return (
        <div className="slide-content-block">
            <h2 className="project-title">{title}</h2>
            <div className="project-info">
                <img src={image} alt={title} className="project-img"></img>
                <div className="project-desc-block">
                    <h4>Description:</h4>
                    <p>{description}</p>
                    <div className="slide-btns">
                        <button type="button" onClick={() => (window.open(link, '_blank'))}>
                            Live Site
                        </button>
                        <button type="button" onClick={() => (window.open(repoLink, '_blank'))}>
                            View Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideContent;

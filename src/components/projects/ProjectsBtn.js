import React, { useState } from 'react';

import './projects.css';
import circle from '../../img/circle.svg';

function ProjectsBtn() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            className="projects-btn"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <p className={isShown ? "showing" : "notShowing"}>Projects</p>
            <img src={circle} alt="circle" />
        </div>
    )
}

export default ProjectsBtn;
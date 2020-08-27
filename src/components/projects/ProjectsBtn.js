import React from 'react';

import './projects.css';
import circle from '../../img/circle.svg';

function ProjectsBtn() {
    return (
        <div className="projects-btn">
            <p>Projects</p>
            <img src={circle} alt="circle" />
        </div>
    )
}

export default ProjectsBtn;
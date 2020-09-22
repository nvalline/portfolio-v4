import React from 'react';
import ProjectSlide from './ProjectSlide';

import './projects.css';

function ProjectContent() {
    return (
        <div className="project-container">
            <div className="project-header">
                <h2>Projects</h2>
            </div>
            <ProjectSlide />
        </div>
    )
}

export default ProjectContent;

import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import ProjectContent from './ProjectContent';

import 'react-responsive-modal/styles.css';
import '../../styles/projects.css';
import circle from '../../img/circle.svg';

function ProjectsBtn() {
    const [isShown, setIsShown] = useState(false);
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(true);
        setIsShown(false);
    }

    return (
        <div
            className="projects-btn"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <p className={isShown || window.innerWidth < 769 ? "showing" : "notShowing"} onClick={closeModal}>Projects</p>
            <img src={circle} alt="circle" onClick={closeModal} className={isShown ? "shape-active" : ""} />
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{ modal: 'projectModal' }}
            >
                <ProjectContent />
            </Modal>
        </div>
    )
}

export default ProjectsBtn;
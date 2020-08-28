import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';

import 'react-responsive-modal/styles.css';
import './projects.css';
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
            <p className={isShown ? "showing" : "notShowing"} onClick={closeModal}>Projects</p>
            <img src={circle} alt="circle" />
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Projects Modal Openned</h2>
            </Modal>
        </div>
    )
}

export default ProjectsBtn;
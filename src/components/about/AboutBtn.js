import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import AboutContent from './AboutContent';

import 'react-responsive-modal/styles.css';
import './about.css';
import diamond from '../../img/diamond.svg';

function AboutBtn() {
    const [isShown, setIsShown] = useState(false);
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(true);
        setIsShown(false);
    }

    return (
        <div
            className="about-btn"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <p className={isShown ? "showing" : "notShowing"} onClick={closeModal}>About</p>
            <img src={diamond} alt="diamond" />
            <Modal open={open} onClose={() => setOpen(false)} center>
                <AboutContent />
            </Modal>
        </div>
    )
}

export default AboutBtn;

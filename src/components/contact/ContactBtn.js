import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import ContactContent from './ContactContent';

import 'react-responsive-modal/styles.css';
import '../../styles/contact.css';
import square from '../../img/square.svg';

function ContactBtn() {
    const [isShown, setIsShown] = useState(false);
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(true);
        setIsShown(false);
    }

    return (
        <div
            className="contact-btn"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <img src={square} alt="square" />
            <p className={isShown || window.innerWidth < 769 ? "showing" : "notShowing"} onClick={closeModal}>Contact</p>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{ modal: 'contactModal' }}
            >
                <ContactContent />
            </Modal>
        </div>
    )
}

export default ContactBtn;
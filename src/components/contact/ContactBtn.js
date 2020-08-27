import React, { useState } from 'react';

import './contact.css';
import square from '../../img/square.svg';

function ContactBtn() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            className="contact-btn"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <img src={square} alt="square" />
            <p className={isShown ? "showing" : "notShowing"}>Contact</p>
        </div>
    )
}

export default ContactBtn;
import React from 'react';

import './contact.css';
import square from '../../img/square.svg';

function ContactBtn() {
    return (
        <div className="contact-btn">
            <img src={square} alt="square" />
            <p>Contact</p>
        </div>
    )
}

export default ContactBtn;
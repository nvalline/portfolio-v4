import React from 'react';
import ContactForm from './ContactForm';

import './contact.css';

function ContactContent() {
    return (
        <div className="contact-container">
            <div className="blue-block">
                <h3>Let's Work Together</h3>
                <hr />
                <ContactForm />
            </div>
            <div className="yellow-block"></div>
        </div>
    )
}

export default ContactContent;

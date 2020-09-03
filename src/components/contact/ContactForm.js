import React from 'react';

import './contact.css';

function ContactForm() {
    return (
        <form className="contact-form">
            <input type="text" id="fullName" className="contact-input" name="fullName" placeholder="Your full name" />
            <input type="email" id="email" className="contact-input" name="email" placeholder="Your email address" />
            <textarea id="message" className="contact-msg" name="message" placeholder="Your message"></textarea>
            <button type="button" id="form-btn" className="contact-form-btn">Send Message</button>
        </form>
    )
}

export default ContactForm;

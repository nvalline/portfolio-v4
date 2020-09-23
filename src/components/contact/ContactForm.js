import React, { useContext } from 'react';
import emailjs from 'emailjs-com';
import { FormContext } from '../../utils/FormContext';

import '../../styles/contact.css';

function ContactForm() {
    const [contactForm, setContactForm] = useContext(FormContext);

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('service_i0z7d5s', 'template_2uzc9ip', event.target, process.env.REACT_APP_USER_ID)
            .then(result => {
                console.log(result.text);
                setContactForm(false);
            }, error => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" id="name" className="contact-input" name="from_name" placeholder="Your full name" />
            <input type="email" id="email" className="contact-input" name="from_email" placeholder="Your email address" />
            <textarea id="message" className="contact-msg" name="message" placeholder="Your message"></textarea>
            <button type="submit" id="form-btn" className="contact-form-btn">Send Message</button>
        </form>
    )
}

export default ContactForm;

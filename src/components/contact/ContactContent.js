import React, { useContext } from 'react';
import ContactForm from './ContactForm';
import SubmitSuccess from './SubmitSuccess';
import { FormContext } from '../../utils/FormContext'

import '../../styles/contact.css';

function ContactContent() {
    const [contactForm] = useContext(FormContext);

    return (
        <div className="contact-container">
            <div className="blue-block">
                <h3>Let's Work Together</h3>
                <hr />
                {contactForm === true ? <ContactForm /> : <SubmitSuccess />}
            </div>
            <div className="yellow-block"></div>
        </div>
    )
}

export default ContactContent;

import React from 'react';

import './contact.css';

function ContactForm() {
    return (
        <form method="post" action="https://www.aweber.com/scripts/addlead.pl" className="contact-form">
            <input type="hidden" name="meta_web_form_id" value="57579863" />
            <input type="hidden" name="meta_split_id" value="" />
            <input type="hidden" name="listname" value="awlist5744955" />
            <input type="hidden" name="redirect" value="https://www.aweber.com/form/thankyou_vo.html" id="redirect_df823e2fc2289d7ca70340792ed4ac07" />
            <input type="hidden" name="meta_redirect_onlist" value="https://natevalline.com" />
            <input type="hidden" name="meta_adtracking" value="portfolio form" />
            <input type="hidden" name="meta_message" value="1" />
            <input type="hidden" name="meta_required" value="name,email,custom form-msg" />
            <input type="hidden" name="meta_forward_vars" value="1" />
            <input type="hidden" name="meta_tooltip" value="" />
            <input type="text" id="name" className="contact-input" name="name" placeholder="Your full name" />
            <input type="email" id="email" className="contact-input" name="email" placeholder="Your email address" />
            <textarea id="message" className="contact-msg" name="custom form-msg" placeholder="Your message"></textarea>
            <button type="submit" id="form-btn" className="contact-form-btn">Send Message</button>
        </form>
    )
}

export default ContactForm;

import React from 'react';
import Social from './Social';

import profileImg from '../../img/profile-image.png';

function AboutContent() {
    return (
        <div>
            <div>
                <h3>Who I am...</h3>
                <p>I am a Full Stack Web Developer with a wide range of business experience in multiple industries.  Recently completed a certificate in Full Stack Development from the University of Utah where I developed skills in Javascript, React, CSS and other current programming languages.</p>
                <p>Previous work with a start-up company refined many other related skills; like problem solving, delivering accurate work, time management & communication among all levels of the business.  Here I proudly leveraged my ability to see both the macro and micro levels of the business, I have implemented different policies, procedures and programs that have resulted in improved efficiencies.</p>
                <p>I’m excited to incorporate these past experiences with my creativity and implement them into building quality experiences on the web.</p>
            </div>
            <Social />
            <img src={profileImg} alt="profile"></img>
        </div>
    )
}

export default AboutContent;

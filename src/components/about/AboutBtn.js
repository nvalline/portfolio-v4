import React from 'react';

import './about.css';
import diamond from '../../img/diamond.svg';

function AboutBtn() {
    return (
        <div className="about-btn">
            <p>About</p>
            <img src={diamond} alt="diamond" />
        </div>
    )
}

export default AboutBtn;

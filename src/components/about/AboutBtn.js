import React, { useState } from 'react';

import './about.css';
import diamond from '../../img/diamond.svg';

function AboutBtn() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            className="about-btn"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <p className={isShown ? "showing" : "notShowing"}>About</p>
            <img src={diamond} alt="diamond" />
        </div>
    )
}

export default AboutBtn;

import React, { useState } from "react";

const Hamburger = () => {

    const [isActive, setActive] = useState(false);

    const changeClass = () => setActive(!isActive);

    return(
        <button className={isActive ? 'hamburger hamburger--active' : 'hamburger'} onClick={changeClass}>
            <span className='hamburger__box'>
                <span className='hamburger__inner'>

                </span>
            </span>

        </button>
    )
}

export default Hamburger;
import React from 'react';
import Hamburger from './hamburger';

function Menu() {

    const years =[
        2018,
        2019,
        2020,
        2021,
    ];

    const months =[
        'styczeń',
        'luty',
        'marzec',
        'kwiecień',
        'maj',
        'czerwiec',
        'lipiec',
        'sierpień',
        'wrzesień',
        'październik',
        'listopad',
        'grudzień',
    ];

    return(
        <div>
            Menu
            <Hamburger />
        </div>
    )
}

export default Menu;

import React from 'react';
import Logo from './logo';
import Navigation from './navigation';

const Header = () => {

    // const years =[
    //     2018,
    //     2019,
    //     2020,
    //     2021,
    // ];

    // const months =[
    //     'styczeń',
    //     'luty',
    //     'marzec',
    //     'kwiecień',
    //     'maj',
    //     'czerwiec',
    //     'lipiec',
    //     'sierpień',
    //     'wrzesień',
    //     'październik',
    //     'listopad',
    //     'grudzień',
    // ];

    return(
        <header>
            <Logo />
            <nav>
                <div className="nav">
                    <Navigation />
                </div>
            </nav>
        </header>
    )
}

export default Header;

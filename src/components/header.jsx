import React from 'react';
import Logo from './logo';
import Navigation from './navigation';

const Header = () => {
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

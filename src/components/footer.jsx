import React from 'react';

const Footer = () => {
    return(
        <footer>
            <div className="socials">

                <div className="tile tile--fb">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="icon-facebook"></i>
                    </a>
                </div>

                <div className="tile tile--yt">
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-youtube"></i>
                    </a>
                </div>

                <div className="tile tile--tw">
                    <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
                        <i className="icon-twitter"></i>
                    </a>
                </div>

                <div className="tile tile--in">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-instagram"></i>
                    </a>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;

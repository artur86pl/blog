import React from 'react';

const Footer = () => {
    const socialsArray = [
        {
            icon: "icon-facebook",
            class: "tile tile--fb",
            webside: "https://www.facebook.com/",
        },
        {
            icon: "icon-youtube",
            class: "tile tile--yt",
            webside: "https://www.youtube.com/",
        },
        {
            icon: "icon-twitter",
            class: "tile tile--tw",
            webside: "https://twitter.com/home",
        },
        {
            icon: "icon-instagram",
            class: "tile tile--in",
            webside: "https://www.instagram.com/",
        },
    ]

    return(
        <footer>
            <div className="socials">
                {socialsArray.map(service => <div key={service.webside} className={service.class}>
                    <a href={service.webside} target="_blank" rel="noopener noreferrer">
                        <i className={service.icon}></i>
                    </a>
                </div>)}
            </div>
        </footer>
    )
}

export default Footer;

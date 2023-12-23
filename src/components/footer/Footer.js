import React from 'react';
import './footer.css';
import logo from './assets/footerLogo.svg';
import linkedIn from './assets/linkedin.svg';
import facebook from './assets/facebook.svg';
import gitHub from './assets/github.svg';
import instagram from './assets/instagram.svg';

export default function Footer() {
    const socialMedia = [
        {
            name: "LinkedIn",
            src: linkedIn,
            link: '#',
        },
        {
            name: "GitHub",
            src: gitHub,
            link: 'https://github.com/mucanastasia',
        },
        {
            name: "Facebook",
            src: facebook,
            link: '#',
        },
        {
            name: "Instagram",
            src: instagram,
            link: '#',
        },
    ];

    const footerNav = [
        {
            name: "Home",
            link: "#",
            alt: "Home",
        },
        {
            name: "Specials",
            link: "#",
            alt: "Specials",
        },
        {
            name: "About Us",
            link: "#",
            alt: "About Us",
        },
        {
            name: "Reserve a Table",
            link: "#",
            alt: "Reserve a Table",
        },
    ];

    const footerContact = [
        {
            content: "22 Sakura St, Ephemera",
            alt: "Address",
        },
        {
            content: "mail@akamomiji.site",
            alt: "E-mail",
        },
        {
            content: "+123 3456789",
            alt: "Phone number",
        },
    ];

    const footerSocial = [
        {
            name: "Instagram",
            link: "#",
            alt: "Instagram",
        },
        {
            name: "Facebook",
            link: "#",
            alt: "Facebook",
        },
        {
            name: "Twitter",
            link: "#",
            alt: "Twitter",
        },
    ];

    const socialMediaItems = socialMedia.map(({name, link, src}) => {
        return <a className='socialMedia' href={link} alt={name}><img src={src} alt={name}/></a>
    });
    
    const footerNavItems = footerNav.map(({name, link, alt}) => {
        return <a href={link} alt={alt}><li>{name}</li></a>
    });

    const footerContactItems = footerContact.map(({content, alt}) => {
        return <li alt={alt}>{content}</li>
    });

    const footerSocialItems = footerSocial.map(({name, link, alt}) => {
        return <a href={link} alt={alt}><li>{name}</li></a>
    });

  return (
    <footer>
        <div className='mainFooter'>
            <div className='credit'>
                <img src={logo} alt="Logo" />
                <p>{`This project was conceived and developed by Anastasia Shchodro with the assistance of AI (content & logo)`}</p>
                <div>
                    {socialMediaItems}
                </div>
            </div>
            <div className='footerNav'>
                <div>
                    <h3>Navigation</h3>
                        <ul>
                            {footerNavItems}
                        </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                        <ul>
                            {footerContactItems}
                        </ul>
                </div>
                <div>
                    <h3>Social</h3>
                        <ul>
                            {footerSocialItems}
                        </ul>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <div>
                <p>© 2023  Aka Momiji Lounge.  All rights reserved</p>
            </div>
            <div>
                <a href='#' alt='Privacy & Policy'>Privacy & Policy</a>
                <a href='#' alt='Terms & Condition'>Terms & Condition</a>
            </div>
        </div>
    </footer>
  );
}
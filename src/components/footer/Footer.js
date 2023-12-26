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
            id: 'myLinkedIn',
            name: 'LinkedIn',
            src: linkedIn,
            link: '#',
        },
        {
            id: 'myGitHub',
            name: 'GitHub',
            src: gitHub,
            link: 'https://github.com/mucanastasia',
        },
        {
            id: 'myFacebook',
            name: 'Facebook',
            src: facebook,
            link: '#',
        },
        {
            id: 'myInstagram',
            name: 'Instagram',
            src: instagram,
            link: '#',
        },
    ];

    const footerNav = [
        {
            id: 'footerHome',
            name: 'Home',
            link: '#',
        },
        {
            id: 'footerSpecials',
            name: 'Specials',
            link: '#',
        },
        {
            id: 'footerAboutus',
            name: 'About Us',
            link: '#',
        },
        {
            id: 'footerReservation',
            name: 'Reserve a Table',
            link: '#',
        },
    ];

    const footerContact = [
        {
            id: 'address',
            content: '22 Sakura St, Ephemera',
            alt: 'Address',
        },
        {
            id: 'email',
            content: 'mail@akamomiji.site',
            alt: 'E-mail',
        },
        {
            id: 'phoneNumber',
            content: '+123 3456789',
            alt: 'Phone number',
        },
    ];

    const footerSocial = [
        {
            id: 'instagram',
            name: 'Instagram',
            link: '#',
        },
        {
            id: 'facebook',
            name: 'Facebook',
            link: '#',
        },
        {
            id: 'twitter',
            name: 'Twitter',
            link: '#',
        },
    ];

    const socialMediaItems = socialMedia.map(({id, name, link, src}) => {
        return <a className='socialMedia' href={link} alt={name} key={id}><img src={src} alt={name}/></a>
    });
    
    const footerNavItems = footerNav.map(({id, name, link}) => {
        return <a href={link} alt={name} key={id}><li>{name}</li></a>
    });

    const footerContactItems = footerContact.map(({id, content, alt}) => {
        return <li alt={alt} key={id}>{content}</li>
    });

    const footerSocialItems = footerSocial.map(({id, name, link}) => {
        return <a href={link} alt={name} key={id}><li>{name}</li></a>
    });

  return (
    <footer>
        <div className='mainFooter'>
            <div className='credit'>
                <img src={logo} alt='Logo' />
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
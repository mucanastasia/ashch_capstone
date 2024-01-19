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
            link: 'https://www.linkedin.com/in/anastasiia-shchodro-35a3b618b',
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
            link: 'https://www.facebook.com/mucanastasia',
        },
        {
            id: 'myInstagram',
            name: 'Instagram',
            src: instagram,
            link: 'https://www.instagram.com/mucanastasia',
        },
    ];

    const handleClick = (anchor) => (event) => {
        event.preventDefault();
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', });
        }
    };

    const footerNav = [
        {
            id: 'footerHome',
            name: 'Home',
            link: '/',
            fnc: handleClick('hero'),
        },
        {
            id: 'footerSpecials',
            name: 'Specials',
            link: '#specials',
            fnc: handleClick('specials'),
        },
        {
            id: 'footerReviews',
            name: 'Reviews',
            link: '#reviews',
            fnc: handleClick('reviews'),
        },
        {
            id: 'footerAboutus',
            name: 'About Us',
            link: '#about',
            fnc: handleClick('about'),
        },
        {
            id: 'footerReservation',
            name: 'Reserve a Table',
            link: '#reservation',
            fnc: handleClick('reservation'),
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
        return <a className='socialMedia' href={link} alt={name} key={id} target='_blank' rel='noopener noreferrer' ><img src={src} alt={name}/></a>
    });

    const footerNavItems = footerNav.map(({id, name, link, fnc}) => {
        return <a href={link} alt={name} key={id} onClick={fnc}><li>{name}</li></a>
    });

    const footerContactItems = footerContact.map(({id, content, alt}) => {
        return <li alt={alt} key={id}>{content}</li>
    });

    const footerSocialItems = footerSocial.map(({id, name, link}) => {
        return <a href={link} alt={name} key={id} target='_blank' rel='noopener noreferrer' ><li>{name}</li></a>
    });

  return (
    <footer>
        <div className='footerContainer'>
            <div className='mainFooter'>
                <div className='credit'>
                    <img src={logo} alt='Logo' />
                    <p>{`This project was conceived and developed by Anastasia Shchodro with the assistance of AI (for content, logos, and some images)`}</p>
                    <div>
                        {socialMediaItems}
                    </div>
                </div>
                <div className='footerNav'>
                    <div>
                        <h6>Navigation</h6>
                        <ul>
                            {footerNavItems}
                        </ul>
                    </div>
                    <div>
                        <h6>Contact</h6>
                        <ul>
                            {footerContactItems}
                        </ul>
                    </div>
                    <div>
                        <h6>Social</h6>
                        <ul>
                            {footerSocialItems}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div>
                    <p>© 2023  Aka Momiji Lounge. All rights reserved</p>
                </div>
                <div>
                    <a href='/' alt='Privacy & Policy'>Privacy & Policy</a>
                    <a href='/' alt='Terms & Condition'>Terms & Condition</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
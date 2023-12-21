import React from 'react';
import './footer.css';
import linkedIn from './assets/linkedin.svg';
import facebook from './assets/facebook.svg';
import gitHub from './assets/github.svg';
import instagram from './assets/instagram.svg';

export default function Footer({logo}) {
    const socialMedia = [
        {
            name: "LinkedIn",
            src: linkedIn,
            link: '#',
        },
        {
            name: "Facebook",
            src: facebook,
            link: '#',
        },
        {
            name: "GitHub",
            src: gitHub,
            link: 'https://github.com/mucanastasia',
        },
        {
            name: "Instagram",
            src: instagram,
            link: '#',
        },
        ];

    const socialMediaItems = socialMedia.map(item => {
        return <a className='socialMedia' href={item.link} alt={item.name}><img src={item.src} alt={item.name}/></a>
    });

  return (
    <footer>
        <div className='mainFooter'>
            <div>
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
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                </div>
                <div>
                    <h3>Social</h3>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
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
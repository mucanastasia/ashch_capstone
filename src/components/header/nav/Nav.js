import React, { useState, useEffect } from 'react';
import Button from '../../main/button/Button';
import './nav.css';

export default function Nav() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleClick = (anchor) => (event) => {
        event.preventDefault();
        const element = document.getElementById(anchor);
        const menu = document.getElementById('menu');
        const menuToggle = document.querySelector('#menuToggle > input[type="checkbox"]');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', });
        }
        if (menu) {
            menuToggle.checked = false;
        }
    };

    const links = [
        {
            id: 'home',
            name: 'Home',
            link: './',
            type: 'navLink',
            fnc: handleClick('hero'),
        },
        {
            id: 'specials',
            name: 'Specials',
            link: '#specials',
            type: 'navLink',
            fnc: handleClick('specials'),
        },
        {
            id: 'review',
            name: 'Reviews',
            link: '#reviews',
            type: 'navLink',
            fnc: handleClick('reviews'),
        },
        {
            id: 'about',
            name: 'About Us',
            link: '#about',
            type: 'navLink',
            fnc: handleClick('about'),
        },
        {
            id: 'reservation',
            name: 'Reserve a Table',
            link: '#reservation',
            type: 'sideBarMenu',
            fnc: handleClick('reservation'),
        },
    ];

    const sideBarList = links
        .map(({id, name, link, fnc}) => {
        return <a href={link} alt={name} key={id} onClick={fnc}><li>{name}</li></a>
    });

    const navListDesktop = links
        .filter( data => data.type === 'navLink')
        .map(({id, name, link, fnc}) => {
        return <a href={link} alt={name} key={id} onClick={fnc}><li>{name}</li></a>
    });

    return (
        <nav>
            {screenWidth > 992 ? (
                <div className='desktopNav'>
                    <ul>
                        {navListDesktop}
                    </ul>
                    <Button name='Reserve a Table' type='primary' anc='reservation' />
                </div>
            ) : (
                <div className='menuToggle' id='menuToggle'>
                    <input type='checkbox' />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className='menu' id='menu'>
                        {sideBarList}
                    </ul>
                </div>
            )}
        </nav>
    );
}
import React from 'react';
import './nav.css';

export default function Nav() {
    const links = [
        {
            id: 'navHome',
            name: 'Home',
            link: '#',
        },
        {
            id: 'navSpecials',
            name: 'Specials',
            link: '#',
        },
        {
            id: 'navAboutus',
            name: 'About Us',
            link: '#',
        },
        {
            id: 'navReservation',
            name: 'Reserve a Table',
            link: '#',
        },
    ];

    const listItems = links.map(({id, name, link}) => {
        return <a href={link} alt={name} key={id}><li>{name}</li></a>
    });


    return (
        <nav>
            <ul>
                {listItems}
            </ul>
        </nav>
    );
}
import React from 'react';
import Button from '../../main/button/Button';
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
    ];

    const listItems = links.map(({id, name, link}) => {
        return <a href={link} alt={name} key={id}><li>{name}</li></a>
    });


    return (
        <nav>
            <ul>
                {listItems}
            </ul>
            <Button name='Reserve a Table' type='primary' />
        </nav>
    );
}
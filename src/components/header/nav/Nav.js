import React from 'react';
import './nav.css';

export default function Nav() {
    const links = [
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

    const listItems = links.map(links => {
        return <li><a href={links.link} alt={links.alt}>{links.name}</a></li>
    });


    return (
        <nav>
            <ul>
                {listItems}
            </ul>
        </nav>
    );
}
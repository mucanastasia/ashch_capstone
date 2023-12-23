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

    const listItems = links.map(({name, link, alt}) => {
        return <a href={link} alt={alt}><li>{name}</li></a>
    });


    return (
        <nav>
            <ul>
                {listItems}
            </ul>
        </nav>
    );
}
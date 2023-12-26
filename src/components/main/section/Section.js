import React from 'react';
import './section.css';
import Specials from './specials/Specials';
import Reservation from './reservation/Reservation';
import Reviews from './reviews/Reviews';


export default function Section({name, title, subtitle}) {
  return (
    <section id={name}>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            {(name === 'specials') && <Specials />}
            {(name === 'reservation') && <Reservation />}
            {(name === 'reviews')  && <Reviews />}
    </section>
  );
}
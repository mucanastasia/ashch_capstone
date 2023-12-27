import React from 'react';
import './main.css';
import Hero from './hero/Hero';
import Specials from './specials/Specials';
import Reservation from './reservation/Reservation';
import Reviews from './reviews/Reviews';

export default function Main() {
  return (
    <main>
        <Hero name='hero' />
        <Specials name='specials' title='Specials' subtitle={`Experience culinary brilliance with our Chef's Specials`} />
        <Reservation name='reservation' title='Reserve a Table' subtitle='Plan your dining experience by booking a table in advance' />
        <Reviews name='reviews' title='What Our Clients Say' subtitle='We are dedicated to enhancing your experience and value your feedback' />
         <Hero name='about' />
    </main>
  );
}

    // TODO: forms for reservation a table

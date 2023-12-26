import React from 'react';
import './main.css';
import Hero from './hero/Hero';

export default function Main() {
  return (
    <main>
        <Hero name='hero' />
        <section id='specials'>
        {
            // TODO: extract "Section" component
        }
            <h2>Specials</h2>
            <h4>Experience culinary brilliance with our Chef's Specials</h4>
            {
                // TODO: 3 cards with specials
                // <article></article>
            }
        </section>
        <section id='reserve'>
            <h2>Reserve a Table</h2>
            <h4>Plan your dining experience by booking a table in advance</h4>
            {
                // TODO: forms for reservation a table
            }
        </section>
        <section id='reviews'>
            <h2>What Our Clients Say</h2>
            <h4>We are dedicated to enhancing your experience and value your feedback</h4>
            {
                // TODO: 4 cards with reviews
                // <article></article>
            }
        </section>
        <Hero name='about' />
    </main>
  );
}
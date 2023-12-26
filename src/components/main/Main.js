import React from 'react';
import './main.css';
import Hero from './hero/Hero';
import Section from './section/Section'

export default function Main() {
  return (
    <main>
        <Hero name='hero' />
        <Section name='specials' title='Specials' subtitle={`Experience culinary brilliance with our Chef's Specials`} />
        <Section name='reservation' title='Reserve a Table' subtitle='Plan your dining experience by booking a table in advance' />
        <Section name='reviews' title='What Our Clients Say' subtitle='We are dedicated to enhancing your experience and value your feedback' />
         <Hero name='about' />
    </main>
  );
}

{
    // TODO: extract "Section" component
    // TODO: 3 cards with specials
    // TODO: forms for reservation a table
    // TODO: 4 cards with reviews
}
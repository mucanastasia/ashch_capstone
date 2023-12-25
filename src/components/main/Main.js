import React from 'react';
import './main.css';
import Hero from './hero/Hero';

export default function Main() {
  return (
    <main>
        <Hero name='hero' />
        {
        //<section id='hero'>
        
            // TODO: extract "Hero" component
            // <article>
            //     <h1>Aka Momiji Lounge</h1>
            //     <span>"Where Kyoto Inspires Every Bite"</span>
            //     <p>
            //         Indulge in the exquisite at Aka Momiji Lounge, a premium sushi haven meticulously crafted with inspiration from the elegance 
            //         of Kyoto. Immerse yourself in a culinary journey, echoing the rich cultural tapestry of Kyoto in every bite.
            //     </p>
            //     <button>Reserve a table</button>
            // </article>
        
            
        //</section>
        }
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
        {/* <section id='about'>
        {
            // TODO: extract "About" component
        }
            <article>
                <h1>Aka Momiji Lounge</h1>
                <span>"Where Kyoto Inspires Every Bite"</span>
                <p>
                    In the heart of the city, Aka Momiji Lounge pays tribute to Kyoto's grace, embodying transformative beauty as a premium sushi 
                    haven. Each dish echoes Kyoto's traditions, inviting you to savor a symphony of flavors. Step into a realm where modern elegance 
                    meets timeless charm, where every bite is a brushstroke on the canvas of Kyoto's rich cultural heritage.
                </p>
            </article>
        </section> */}
        <Hero name='about' />
    </main>
  );
}
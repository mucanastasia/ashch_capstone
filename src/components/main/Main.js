import React from 'react';
import './main.css';

export default function Main() {
  return (
    <main>
        <section id='hero'>
            <article>
                <h1>Aka Momiji Lounge</h1>
                <span>"Where Kyoto Inspires Every Bite"</span>
                <p>
                    Indulge in the exquisite at Aka Momiji Lounge, a premium sushi haven meticulously crafted with inspiration from the elegance 
                    of Kyoto. Immerse yourself in a culinary journey, echoing the rich cultural tapestry of Kyoto in every bite.
                </p>
                <button>Reserve a table</button>
            </article>
        </section>
        <section id='specials'>
            <h2>Specials</h2>
            <p>Experience culinary brilliance with our Chef's Specials</p>
            {
                // TODO: 3 cards with specials
                // <article></article>
            }
        </section>
        <section id='reserve'>
            <h2>Reserve a Table</h2>
            <p>Plan your dining experience by booking a table in advance</p>
            {
                // TODO: forms for reservation a table
            }
        </section>
        <section id='reviews'>
            <h2>What Our Clients Say</h2>
            <p>We are dedicated to enhancing your experience and value your feedback</p>
            {
                // TODO: 4 cards with reviews
                // <article></article>
            }
        </section>
        <section id='about'>
            <article>
                <h1>Aka Momiji Lounge</h1>
                <span>"Where Kyoto Inspires Every Bite"</span>
                <p>
                    In the heart of the city, Aka Momiji Lounge pays tribute to Kyoto's grace, embodying transformative beauty as a premium sushi 
                    haven. Each dish echoes Kyoto's traditions, inviting you to savor a symphony of flavors. Step into a realm where modern elegance 
                    meets timeless charm, where every bite is a brushstroke on the canvas of Kyoto's rich cultural heritage.
                </p>
            </article>
        </section>
    </main>
  );
}
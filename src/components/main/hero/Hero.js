import React from 'react';
import './hero.css';


export default function Hero({name}) {
    const heroContent = {
        id: 'hero',
        title: 'Aka Momiji Lounge',
        subtitle: `"Where Kyoto Inspires Every Bite"`,
        mainText: 'Indulge in the exquisite at Aka Momiji Lounge, a premium sushi haven meticulously crafted with inspiration from the elegance of Kyoto. Immerse yourself in a culinary journey, echoing the rich cultural tapestry of Kyoto in every bite.',
        showButton: true,
    }

    const aboutContent = {
        id: 'about',
        title: 'Aka Momiji Lounge',
        subtitle: `"Where Kyoto Inspires Every Bite"`,
        mainText: `In the heart of the city, Aka Momiji Lounge pays tribute to Kyoto's grace, embodying transformative beauty as a premium sushi haven. Each dish echoes Kyoto's traditions, inviting you to savor a symphony of flavors. Step into a realm where modern elegance meets timeless charm, where every bite is a brushstroke on the canvas of Kyoto's rich cultural heritage.`,
        showButton: false,
    }

    let displayContent;
    if (name === 'hero') {
        displayContent = heroContent;
    } else {
        displayContent = aboutContent;
    }

  return (
    <section id={displayContent.id}>
        <article>
            <h1>{displayContent.title}</h1>
                <span>{displayContent.subtitle}</span>
                <p>{displayContent.mainText}</p>
                {displayContent.showButton && <button>Reserve a table</button>}
        </article>
    </section>
  );
}
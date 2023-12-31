import React from 'react';
import './hero.css';
import Button from '../button/Button';


export default function Hero({name}) {
    const heroContent = {
        id: 'mainHero',
        animationClass: 'animationHero',
        title: 'Aka Momiji Lounge',
        subtitle: `"Where Kyoto Inspires Every Bite"`,
        mainText: 'Indulge in the exquisite at Aka Momiji Lounge, a premium sushi haven meticulously crafted with inspiration from the elegance of Kyoto. Immerse yourself in a culinary journey, echoing the rich cultural tapestry of Kyoto in every bite.',
        showButton: true,
        buttonText: 'Reserve a Table',
        buttonType: 'primary',
    }

    const aboutContent = {
        id: 'aboutHero',
        title: 'Aka Momiji Lounge',
        subtitle: `"Where Kyoto Inspires Every Bite"`,
        mainText: `In the heart of the city, Aka Momiji Lounge pays tribute to Kyoto's grace, embodying transformative beauty as a premium sushi haven. Each dish echoes Kyoto's traditions, inviting you to savor a symphony of flavors. Step into a realm where modern elegance meets timeless charm, where every bite is a brushstroke on the canvas of Kyoto's rich cultural heritage.`,
        showButton: false,
    }

    let displayContent;
    if (name === 'mainHero') {
        displayContent = heroContent;
    } else {
        displayContent = aboutContent;
    }

  return (
    <section className={displayContent.id}>
        <article>
            <div className='heroContainer'>
                <h1 className={displayContent.animationClass}>{displayContent.title}</h1>
                <span className={displayContent.animationClass}>{displayContent.subtitle}</span>
                <p className={displayContent.animationClass}>{displayContent.mainText}</p>
                {displayContent.showButton && <Button name={displayContent.buttonText} type={displayContent.buttonType} />}
            </div>
        </article>
    </section>
  );
}
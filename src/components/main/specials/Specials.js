import React from 'react';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import Button from '../button/Button';
import './specials.css';


export default function Specials({name, title, subtitle}) {
    const specialsContent = [
      {
        id: 'sp1',
        img: img1,
        name: 'Momiji Symphony Roll',
        content: 'A harmonious blend of fresh sashimi-grade fish, avocado, and cucumber, rolled in a delicate layer of seasoned rice and topped with flame-seared salmon and drizzled with a Kyoto-inspired miso glaze. The roll is then finished with edible flower petals, creating a visual and flavorful symphony on the plate.',
        price: '€ 37',
        showButton: true,
      },
      {
        id: 'sp2',
        img: img2,
        name: 'Kyoto Blossom Bento Box',
        content: `Experience a journey through Kyoto's flavors with our Kyoto Blossom Bento Box. This meticulously crafted ensemble includes grilled Miso-glazed black cod, cherry blossom-infused sushi rice, pickled plum cucumber salad, and tamagoyaki (Japanese omelet) adorned with delicate edible gold leaf.`,
        price: '€ 28',
        showButton: true,
      },
      {
        id: 'sp3',
        img: img3,
        name: 'Tea-Infused Tempura Delight',
        content: 'A twist on tradition, our Tea-Infused Tempura Delight features a medley of seasonal vegetables and shrimp delicately coated in a light and crispy Kyoto green tea-infused batter. Served with a side of matcha salt for dipping, this dish offers a unique and flavorful take on the classic tempura experience.',
        price: '€ 31',
        showButton: true,
      },
    ];

    const specialsList = specialsContent.map(({id, name, img, content, price, showButton}) => {
      return (
        <article key={id} className='specialCard'>
          <div>
            <img src={img} alt={name} />
            <h5>{name}</h5>
            <p>{content}</p>
            </div>
            <div className='specialFooter'>
              <span>{price}</span>
              {showButton && <Button type='secondary' name='See more' />}
            </div>
        </article>
      );
  });


  return (
    <section className={name} id={name}>
      <div className='container'>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <div>
          {specialsList}
        </div>
      </div>
    </section>
  );
}
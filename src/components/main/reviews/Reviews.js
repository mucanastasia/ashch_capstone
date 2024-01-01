import React from 'react';
import Stars from './stars/Stars'
import sophia from './assets/sophia.png';
import ethan from './assets/ethan.png';
import olivia from './assets/olivia.png';
import nathan from './assets/nathan.png';
import './reviews.css';

export default function Reviews({name, title, subtitle}) {
  const reviewsContent = [
    {
     id: 'rw1',
     img: sophia,
     name: 'Sophia M.',
     stars: 5,
     review: '“Exceptional flavours and warm hospitality!”',
    },
    {
      id: 'rw2',
      img: ethan,
      name: 'Ethan L.',
      stars: 5,
      review: '“A culinary journey that exceeds expectations.”',
     },
     {
      id: 'rw3',
      img: olivia,
      name: 'Olivia J.',
      stars: 5,
      review: '“A top-notch dining experience. Amazing!”',
     },
     {
      id: 'rw4',
      img: nathan,
      name: 'Nathan K.',
      stars: 4,
      review: '“Impeccable sushi and attentive service!”',
     },
  ];

  const reviewsList = reviewsContent.map(({id, img, name, stars, review}) => {
    return (
      <article key={id} className='rewiewCard'>
        <div className='reviewHeader'>
          <img className='reviewImg' src={img} alt={name} />
          <div>
            <p>{name}</p>
            <Stars number={stars} id={id} />
          </div>
        </div>
            <p>{review}</p>
      </article>
    );
  });

  return (
    <section className={name} id={name}>
      <div className='container'>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <div>
          {reviewsList}
        </div>
      </div>
    </section>
  );
}
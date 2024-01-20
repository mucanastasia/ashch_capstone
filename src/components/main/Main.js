import React, { useReducer } from 'react';
import './main.css';
import Hero from './hero/Hero';
import Specials from './specials/Specials';
import Reservation from './reservation/Reservation';
import Reviews from './reviews/Reviews';

export const initializeTimes = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 23];
};

export const updateDisabledTimes = (state, action) => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 23];
};

export default function Main() {

  const [disabledTimes, dispatch] = useReducer(updateDisabledTimes, initializeTimes());

  return (
    <main>
        <Hero name='mainHero' />
        <Specials name='specials' title='Specials' subtitle={`Experience culinary brilliance with our Chef's Specials`} />
        <Reservation name='reservation' title='Reserve a Table' subtitle='Plan your dining experience by booking a table in advance' disabledTimes={disabledTimes} dispatch={dispatch} />
        <Reviews name='reviews' title='What Our Clients Say' subtitle='We are dedicated to enhancing your experience and value your feedback' />
        <Hero name='aboutHero' />
    </main>
  );
}

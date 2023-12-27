import React from 'react';
import './stars.css';

export default function Stars({number, id}) {
    let stars = [0, 0, 0, 0, 0];

    if (number > 0 && number < 6) {
        for (let i=0; i< number; i++) {
            stars[i] = 1;
        };
    } else {
        stars = [0, 0, 0, 0, 0];
    }

    const starElements = stars.map((value, index) => {
        if (value === 1) {
          return <span className='activeStar' key={id + index} />;
        } else {
          return <span className='inActiveStar' key={id + index} />;
        }
    });

  return (
    <div className='rating'>
        {starElements}
    </div>
  );
}
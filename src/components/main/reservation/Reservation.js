import React from 'react';


export default function Reservation({name, title, subtitle}) {
  return (
    <section id={name}>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <article>
          <p>The reservation block will be here</p>
      </article>
    </section>
  );
}
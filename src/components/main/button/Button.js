import React from 'react';
import './button.css';


const handleClick = (anchor) => (event) => {
  event.preventDefault();
  const element = document.getElementById(anchor);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', });
  }
}

export default function Button({name, type, anc}) {

  return (
    <button className={type} onClick={handleClick(anc)} >{name}</button>
  );
}
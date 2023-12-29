import React from 'react';
import './button.css';


export default function Button({name, type}) {

  return (
    <button className={type}>{name}</button>
  );
}
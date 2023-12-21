import React from 'react';
import './header.css';
import Nav from './nav/Nav';


export default function Header({logo}) {
  return (
    <header>
        <img src={logo} alt="Logo" />
        <Nav />
    </header>
  );
}
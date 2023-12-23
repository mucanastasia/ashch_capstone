import React from 'react';
import './header.css';
import Nav from './nav/Nav';
import logo from './assets/logo.svg';


export default function Header() {
  return (
    <header>
        <img src={logo} alt="Logo" />
        <Nav />
    </header>
  );
}
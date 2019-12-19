import React from 'react';
import Logo from '../logo/index';
import NavBar from '../navBar/index';
import Style from './style.css';

export default function Header() {
  return (
    <div className={Style.header}>
      <Logo />
      <NavBar />
    </div>
  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo';
import NavBar from '../navBar';
import Style from './style.css';
import LinkData from '../../data/menuItems.json';

export default function Header() {
  return (
    <div className={Style.header}>
      <Logo />
      <NavBar linksList={LinkData} />
      <FontAwesomeIcon icon={faBars} className={Style.icon} />
    </div>
  );
}

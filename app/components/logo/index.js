import React from 'react';
import { Link } from 'react-router-dom';
import logo from './1metras.jpg';
import Style from './style.css';

export default function Logo() {
  return (
    <Link to="/" className={Style.logo}>
      <img src={logo} alt="logo" />
    </Link>
  );
}

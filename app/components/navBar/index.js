import React from 'react';
import { Link } from 'react-router-dom';
import Style from './style.css';

export default function NavBar() {
  return (
    <div className={Style.navbar}>
      <Link to="/" className={Style.link}>
        Pradžia
      </Link>
      <Link to="/medvilnines_virves" className={Style.link}>
        Medvilninės virvės
      </Link>
      <Link to="/gaminiai" className={Style.link}>
        Gaminiai
      </Link>
      <Link to="/straipsniai" className={Style.link}>
        Straipsniai
      </Link>
      <Link to="/skaiciuokles" className={Style.link}>
        Skaičiuoklės
      </Link>
      <Link to="/informacija" className={Style.link}>
        Informacija
      </Link>
    </div>
  );
}

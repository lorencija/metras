import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Style from './style.css';

export default function FooterNavBar() {
  return (
    <div className={Style.footerNav}>
      <Link to="/apie_mus" className={Style.link}>
        Apie mus
      </Link>
      <Link to="/pristatymas" className={Style.link}>
        Prekių pristatymas
      </Link>
      <Link to="/salygos" className={Style.link}>
        Sąlygos ir taisyklės
      </Link>
      <Link to="/kontaktai" className={Style.link}>
        Kontaktai
      </Link>
      <a href="https://www.facebook.com/1metras.lt/" target="_blank">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className={Style.icon}
          size="lg"
        />
      </a>
    </div>
  );
}

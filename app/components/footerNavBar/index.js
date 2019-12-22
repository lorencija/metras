import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Style from './style.css';

export default function FooterNavBar({ linksList }) {
  return (
    <div className={Style.footerNav}>
      <ul className={Style.footernav_list}>
        {linksList.map(link => (
          <li className={Style.navbarItem} key={link.key}>
            <Link to={link.path} className={Style.link}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
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

FooterNavBar.propTypes = {
  linksList: PropTypes.array,
};

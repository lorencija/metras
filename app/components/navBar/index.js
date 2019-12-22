import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Style from './style.css';

export default function NavBar({ linksList }) {
  return (
    <div className={Style.navbar}>
      <ul className={Style.navbar_list}>
        {linksList.map(link => (
          <li className={Style.navbarItem} key={link.key}>
            <Link to={link.path} className={Style.link}>
              {link.text}
            </Link>
            <ul className={Style.navbar_sublist}>
              {link.sublist.map(sublink => (
                <li className={Style.navbarItem} key={sublink.key}>
                  <Link to={sublink.path} className={Style.sublink}>
                    {sublink.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

NavBar.propTypes = {
  linksList: PropTypes.array,
};

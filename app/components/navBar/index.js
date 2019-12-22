import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Style from './style.css';

export default function NavBar({ linksList, navOpen, setNanOpen }) {
  // function isAmpty(listArray) {
  //   if (listArray.length > 0) {
  //     setNanOpen(true);
  //   } else {
  //     setNanOpen(false);
  //   }
  // }
  return (
    <div className={Style.navbar}>
      <ul className={navOpen ? Style.navbar_list_active : Style.navbar_list}>
        <FontAwesomeIcon
          icon={faTimes}
          className={Style.icon}
          onClick={() => setNanOpen(false)}
        />
        {linksList.map(link => (
          <li className={Style.navbarItem} key={link.key}>
            <Link
              to={link.path}
              className={Style.link}
              onClick={() => setNanOpen(false)}
            >
              {link.text}
            </Link>
            <ul className={Style.navbar_sublist}>
              {link.sublist.map(sublink => (
                <li className={Style.navbarItem} key={sublink.key}>
                  <Link
                    to={sublink.path}
                    className={Style.sublink}
                    onClick={() => setNanOpen(false)}
                  >
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
  navOpen: PropTypes.bool,
  setNanOpen: PropTypes.func,
};

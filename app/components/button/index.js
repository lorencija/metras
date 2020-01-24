import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Style from './style.css';

export default function Button({ text, link }) {
  return (
    <div>
      <Link to={link} className={Style.button}>
        {text}
      </Link>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

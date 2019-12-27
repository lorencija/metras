import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function Row(props) {
  return <div className={Style.conteiner}>{props.children}</div>;
}

Row.propTypes = {
  children: PropTypes.element,
};

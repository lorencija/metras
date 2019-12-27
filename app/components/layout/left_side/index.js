import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function LeftSide(props) {
  return <div className={Style.conteiner}>{props.children}</div>;
}

LeftSide.propTypes = {
  children: PropTypes.element,
};

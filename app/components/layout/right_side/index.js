import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function RightSide(props) {
  return <div className={Style.conteiner}>{props.children}</div>;
}

RightSide.propTypes = {
  children: PropTypes.element,
};

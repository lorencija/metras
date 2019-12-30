import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function Block(props) {
  return <div className={Style.conteiner}>{props.children}</div>;
}

Block.propTypes = {
  children: PropTypes.element,
};

import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

export default function Half(props) {
  return <div className={Style.conteiner}>{props.children}</div>;
}

Half.propTypes = {
  children: PropTypes.element,
};

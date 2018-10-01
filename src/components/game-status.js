
import React from 'react';
import PropTypes from 'prop-types';

export default function GameStatus(props) {
  return (
    <span>{props.message}</span>
  );
}

GameStatus.propTypes = {
  message: PropTypes.string.isRequired
};
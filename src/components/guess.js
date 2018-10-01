
import React from 'react';
import PropTypes from 'prop-types';

export default function Guess(props) {
  return (
    <li key={props.index}>{props.number}</li>
  );
}

Guess.propTypes = {
  number: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};
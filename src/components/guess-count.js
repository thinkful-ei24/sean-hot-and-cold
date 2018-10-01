
import React from 'react';
import PropTypes from 'prop-types';

export default function GuessCount(props) {
  return (
    <div>{props.attempts}</div>
  );
}
GuessCount.propTypes = {
  attempts: PropTypes.number.isRequired
};
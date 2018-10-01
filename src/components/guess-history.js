
import React from 'react';
import PropTypes from 'prop-types';
import Guess from './guess';

export default function GuessHistory(props) {
  const guessListElements = props.guesses.map((guess, index) => {
    return <Guess index={index} />;
  });

  return (
    <div>
      <ul>
        {guessListElements}
      </ul>
    </div>
  );
}

GuessHistory.propTypes = {
  guesses: PropTypes.arrayOf(Guess)
}

GuessHistory.defaultProps = {
  guesses: []
}

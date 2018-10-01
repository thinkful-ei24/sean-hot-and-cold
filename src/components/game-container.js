
import React from 'react';
import PropTypes from 'prop-types';

export default function GameContainer(props) {
  // TODO: gradient on title
  return (
    <div>
    <h1>Hot or Cold</h1>
      <GameStatus {props.message} />
      <form>
        <input type="text"></input>
        <button type="submit">Guess</button>
      </form>
      <GuessCount />
      <GuessHistory />
    </div>
  );
}

// GameContainer.propTypes = {
//   message: PropTypes.string.isRequired,
//   attempts: PropTypes.number.isRequired
// };
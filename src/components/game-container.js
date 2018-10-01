
import React from 'react';
import PropTypes from 'prop-types';
import GameStatus from './game-status';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';

export default function GameContainer(props) {
  // TODO: gradient on title
  return (
    <main>
        <GameStatus message={props.message} />
        <form>
          <input type="text"></input>
          <button type="submit">Guess</button>
        </form>
        <GuessCount attempts="0"/>
        <GuessHistory />
    </main>
  );
}

// GameContainer.propTypes = {
//   message: PropTypes.string.isRequired,
//   attempts: PropTypes.number.isRequired
// };
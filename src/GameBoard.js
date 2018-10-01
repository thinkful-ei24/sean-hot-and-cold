
import React from 'react';
import GameContainer from './components/game-container';
import Nav from './components/nav';

export default function GameBoard(props) {
  return (
    <div>
      <Nav />
      <GameContainer message="Make your guess!"/>
    </div>
  );
}
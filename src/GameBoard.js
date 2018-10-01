
import React from 'react';
import GameContainer from './components/game-container';
import Nav from './components/nav';
import Header from './components/header';

export default function GameBoard(props) {
  return (
    <div>
      <Nav />
      <Header />
      <GameContainer message="Make your guess!"/>
    </div>
  );
}
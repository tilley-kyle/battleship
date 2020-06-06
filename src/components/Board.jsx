import React from 'react';
import Tile from './Tile.jsx';

const Board = ({ handleClick }) => {
  const counter = [];
  for (let i = 0; i < 100; i += 1){
    counter.push(i);
  }
  return (
    counter.map((cur) => <Tile key={cur} place={cur} handleClick={handleClick} />)
  )
}

export default Board;
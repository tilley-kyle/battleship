import React from 'react';
import Tile from './Tile.jsx';

const Board = ({ handleClick, board, stage, currTurn }) => {
    const counter = [];
    for (let i = 0; i < 100; i += 1) {
      counter.push(i);
    }
    return (
      counter.map((cur) => <Tile key={cur} place={cur} board={currTurn.board} handleClick={handleClick} />)
    )
}

export default Board;
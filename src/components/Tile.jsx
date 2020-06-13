import React from 'react';
import xCoord from '../helperFunctions/xCoord';
import yCoord from '../helperFunctions/yCoord';

const Tile = ({ place, handleClick, board, shotsAgainst }) => {
  let tileClass = 'tile';
  if (shotsAgainst[place.toString()]) {
    tileClass = `tile-hit`;
  } else if (shotsAgainst[place.toString()] === false) {
    tileClass = `tile-miss`;
  }
  return (
    <div className={tileClass} coords={place} onClick={(e) => handleClick(place)}>
      {board[yCoord(place)][xCoord(place)]}
    </div>
  )
};

export default Tile;
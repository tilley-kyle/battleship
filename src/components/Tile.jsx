import React from 'react';
import xCoord from '../helperFunctions/xCoord';
import yCoord from '../helperFunctions/yCoord';

const Tile = ({ place, handleClick, board, lastShot, shotsAgainst }) => {
  console.log(shotsAgainst)
  let tileClass = 'tile';
  if (shotsAgainst[place.toString()]) {
    console.log('hit ')
    tileClass = `tile-hit`;
  } else if (shotsAgainst[place.toString()] === false) {
    console.log('miss')
    tileClass = `tile-miss`;
  }
  return (
    <div className={tileClass} coords={place} onClick={(e) => handleClick(place)}>
      {board[yCoord(place)][xCoord(place)]}
    </div>
  )
};

export default Tile;
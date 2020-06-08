import React from 'react';
import xCoord from '../helperFunctions/xCoord';
import yCoord from '../helperFunctions/yCoord';

const Tile = ({ place, handleClick, board }) => {
  return (
    <div className="tile" coords={place} onClick={(e) => handleClick(place)}>
      {board[yCoord(place)][xCoord(place)]}
    </div>
  )
};

export default Tile;
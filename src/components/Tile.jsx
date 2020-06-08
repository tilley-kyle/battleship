import React from 'react';
import xCoord from '../helperFunctions/xCoord';
import yCoord from '../helperFunctions/yCoord';

const Tile = ({ place, handleClick, board }) => {
  // let rowCoord;
  // let colCoord;
  // if (place < 10) {
  //   rowCoord = 0;
  //   colCoord = place;
  // } else if (place > 9) {
  //   const string = place.toString();
  //   rowCoord = Number.parseInt(string[0]);
  //   colCoord = Number.parseInt(string[1]);
  // }
  return (
    <div className="tile" coords={place} onClick={(e) => handleClick(place)}>
      {board[yCoord(place)][xCoord(place)]}
    </div>
  )
};

export default Tile;
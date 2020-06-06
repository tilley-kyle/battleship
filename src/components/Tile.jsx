import React from 'react';

const Tile = ({ place, handleClick }) => {
  let rowCoord;
  let colCoord;
  if (place < 10) {
    rowCoord = 0;
    colCoord = place;
  } else if (place > 9) {
    const string = place.toString();
    rowCoord = Number.parseInt(string[0]);
    colCoord = Number.parseInt(string[1]);
  }
  return (
    <div className="tile" coords={place} onClick={(e) => handleClick(place)}></div>
  )
};

export default Tile;
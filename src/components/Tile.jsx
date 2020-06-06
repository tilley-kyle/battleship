import React from 'react';

const Tile = ({ key, place }) => {
  console.log(place)
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
    <div className="tile" >{place}</div>
  )
};

export default Tile;
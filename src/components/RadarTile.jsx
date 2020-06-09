import React from 'react';
import xCoord from '../helperFunctions/xCoord';
import yCoord from '../helperFunctions/yCoord';

const RadarTile = ({ place, handleClick, radar }) => {
  return (
    <div className="radar-tile" coords={place} onClick={(e) => handleClick(place)}>
      {radar[yCoord(place)][xCoord(place)]}
    </div>
  )
};

export default RadarTile;
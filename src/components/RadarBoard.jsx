import React from 'react';
import RadarTile from './RadarTile.jsx';

const RadarBoard = ({ handleClick, radar, stage }) => {
    const counter = [];
    for (let i = 0; i < 100; i += 1) {
      counter.push(i);
    }
    return (
      counter.map((cur) => <RadarTile key={cur} place={cur} radar={radar} handleClick={handleClick} />)
    )
}

export default RadarBoard;
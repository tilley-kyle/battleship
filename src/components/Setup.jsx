import React from 'react';

const Setup = ({ ship }) => {
  const blocks = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolBoat: 2,
  }
  return (
    <div className="setup">
      <button className="ship-button">Place your Carrier</button>
      <button className="ship-button">Place your Battleship</button>
      <button className="ship-button">Place your Destroyer</button>
      <button className="ship-button">Place your Submarine</button>
      <button className="ship-button">Place your Patrol Boat</button>
      <div className="description">The {ship} is {blocks[ship]} blocks</div>
    </div>
  )
};

export default Setup;
import React from 'react';

const Setup = ({ ship, direction }) => {
  const blocks = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolBoat: 2,
  }
  const arrow = `arrow ${direction}`
  return (
    <div className="setup">
      <button className="ship-button">Place your Carrier</button>
      <button className="ship-button">Place your Battleship</button>
      <button className="ship-button">Place your Destroyer</button>
      <button className="ship-button">Place your Submarine</button>
      <button className="ship-button">Place your Patrol Boat</button>
      <div className="description">
        The {ship} is {blocks[ship]} blocks<br/>
        and will point {direction}
      </div>
      <div className={arrow} />
    </div>
  )
};

export default Setup;
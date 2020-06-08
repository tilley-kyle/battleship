import React from 'react';

const Setup = ({ ship, direction, shipSelector }) => {
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
      <button className="ship-button" id="carrier" onClick={(e) => shipSelector(e)} >Place your Carrier</button>
      <button className="ship-button" id="battleship" onClick={(e) => shipSelector(e)} >Place your Battleship</button>
      <button className="ship-button" id="destroyer" onClick={(e) => shipSelector(e)} >Place your Destroyer</button>
      <button className="ship-button" id="submarine" onClick={(e) => shipSelector(e)} >Place your Submarine</button>
      <button className="ship-button" id="patrolboat" onClick={(e) => shipSelector(e)} >Place your Patrol Boat</button>
      <div className="description">
        The {ship} is {blocks[ship]} blocks<br/>
        and will point {direction}
      </div>
      <div className={arrow} />
    </div>
  )
};

export default Setup;
import React from 'react';

const Setup = ({ ship, direction, shipSelector }) => {
  const blocks = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    PatrolBoat: 2,
  }
  const arrow = `arrow ${direction}`
  return (
    <div className="setup">
      <button className="ship-button" id="Carrier" onClick={(e) => shipSelector(e)} >Place your Carrier</button>
      <button className="ship-button" id="Battleship" onClick={(e) => shipSelector(e)} >Place your Battleship</button>
      <button className="ship-button" id="Destroyer" onClick={(e) => shipSelector(e)} >Place your Destroyer</button>
      <button className="ship-button" id="Submarine" onClick={(e) => shipSelector(e)} >Place your Submarine</button>
      <button className="ship-button" id="PatrolBoat" onClick={(e) => shipSelector(e)} >Place your Patrol Boat</button>
      <div className="description">
        The {ship} is {blocks[ship]} blocks<br/>
        and will point {direction}
      </div>
      <div className={arrow} />
    </div>
  )
};

export default Setup;
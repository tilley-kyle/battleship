import React from 'react';
import StartButton from './StartButton';

const Setup = ({ ship, direction, shipSelector, handleDeploy, stage }) => {
  const blocks = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    PatrolBoat: 2,
  }
  const shipText = ship ? `The ${ship} is ${blocks[ship]} blocks and will point ${direction}` : 'Select a ship';
  const arrow = `arrow ${direction}`
  return (
    <div className="setup">
      <button className="ship-button" id="Carrier" onClick={(e) => shipSelector(e)} >Place your Carrier</button>
      <button className="ship-button" id="Battleship" onClick={(e) => shipSelector(e)} >Place your Battleship</button>
      <button className="ship-button" id="Destroyer" onClick={(e) => shipSelector(e)} >Place your Destroyer</button>
      <button className="ship-button" id="Submarine" onClick={(e) => shipSelector(e)} >Place your Submarine</button>
      <button className="ship-button" id="PatrolBoat" onClick={(e) => shipSelector(e)} >Place your Patrol Boat</button>
      <div className="description">{shipText}</div>
      <div className={arrow} />
      <StartButton stage={stage} handleDeploy={handleDeploy} />
    </div>
  )
};

export default Setup;
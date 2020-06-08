import React from 'react';
// import Radar from './Radar';
import Setup from './Setup';
import RadarBoard from './RadarBoard';

const Conditional = ({ stage, ship, direction, board, shipSelector, handleDeploy, handleClick, radar }) => {
  if (stage !== 'battle') {
    return (
      <div>
        <Setup
          ship={ship}
          direction={direction}
          stage={stage}
          shipSelector={shipSelector}
          handleDeploy={handleDeploy}
        />
      </div>
    )
  } else {
    return (
    <div className="radar">
      <RadarBoard radar={radar} handleClick={handleClick} />
    </div>
    );
  }
};

export default Conditional;
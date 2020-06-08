import React from 'react';
import Radar from './Radar';
import Setup from './Setup';

const Conditional = ({ stage, ship, direction, board, shipSelector, handleDeploy, handleClick }) => {
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
      <Radar board={board} handleClick={handleClick} />
    </div>
    );
  }
};

export default Conditional;
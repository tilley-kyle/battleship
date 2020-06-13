import React from 'react';
import Setup from './Setup';
import RadarBoard from './RadarBoard';

const Conditional = ({ stage, ship, direction, shipSelector, handleDeploy, handleClick, currTurn }) => {
  if (stage === 'setup' || stage === 'ready' || stage === "player ready") {
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
  } else if (stage === 'end') {
    return <button className="restart">Play Again?</button>
  } else {
    return (
    <div className="radar">
      <RadarBoard radar={currTurn.radar} handleClick={handleClick} />
    </div>
    );
  }
};

export default Conditional;
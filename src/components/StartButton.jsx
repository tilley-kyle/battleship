import React from 'react';

const StartButton = ({ stage, handleDeploy }) => {
  let start = stage === 'setup' ? "start-button-grey" : "start-button-red";
  let buttonWords = 'Deploy the Fleet!';
  if (stage === 'player ready') buttonWords = 'Waitng on Opponent';

  return (
    <button className={start} onClick={(e) => handleDeploy(e)}>{buttonWords}</button>
  )
};

export default StartButton
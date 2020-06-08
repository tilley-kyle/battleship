import React from 'react';

const StartButton = ({ stage, handleDeploy }) => {
  const start = stage === 'setup' ? "start-button-grey" : "start-button-red";
  return (
    <button className={start} onClick={(e) => handleDeploy(e)}>Deploy the Fleet!</button>
  )
};

export default StartButton
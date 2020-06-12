import React from 'react';

const BoardHeader = ({ stage, turn, playerID }) => {
  let filler = '';
  if (stage !== 'battle') {
    filler = `Admiral ${playerID}, set your fleet!`;
  } else if (stage === 'player ready') {
    const otherPlayer = playerID === 1 ? 1 : 2;
    filler = `Waiting on Admiral ${otherPlayer}`;
  } else if (stage === 'battle' && turn === playerID) {
    filler = `Admiral ${playerID}, launch your attack!`;
  } else {
    filler = `Waiting for Admiral ${turn}'s attack`;
  }
  return (
    <div className="label-title">{filler}</div>
  )
};

export default BoardHeader;
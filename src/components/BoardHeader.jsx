import React from 'react';

const BoardHeader = ({ stage, turn, playerID }) => {
  let filler = '';
  if (stage !== 'battle') {
    filler = `Admiral ${playerID}, set your fleet!`;
  }
  return (
    <div className="label-title">{filler}</div>
  )
};

export default BoardHeader;
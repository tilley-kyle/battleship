
const playerXReady = (otherState, currID) => {
  const playerXReady = currID === 1 ? 'player2Ready' : 'player1Ready';
  return { [playerXReady]: otherState[playerXReady] };
};

export default playerXReady;

const playerXSetup = (otherState, currID) => {
  const playerXSetup = currID === 1 ? 'player2Setup' : 'player1Setup';
  return {[playerXSetup]: otherState[playerXSetup]};
};

export default playerXSetup;
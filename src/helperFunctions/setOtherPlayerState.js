
const setOtherPlayerState = (otherState, currID) => {
  const playerXSetup = currID === 1 ? 'player2Setup' : 'player1Setup';
  const playerXReady = currID === 1 ? 'player2Ready' : 'player1Ready';
  const turnX = currID === 1 ? 'turn2' : 'turn1';

  return {
    [playerXSetup]: otherState[playerXSetup],
    [playerXReady]: otherState[playerXReady],
    [turnX]: otherState[turnX],
  }
};

export default setOtherPlayerState;
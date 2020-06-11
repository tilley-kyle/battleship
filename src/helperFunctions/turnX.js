
const turnX = (otherState, currID) => {
  const turnX = currID === 1 ? 'turn2' : 'turn1';
  return { [turnX]: otherState[turnX] };
};

export default turnX;
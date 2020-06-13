import yCoord from './yCoord';
import xCoord from './xCoord';

const shotsAgainstPlacer = (coords, shotsAgainst, bool) => {
  const x = xCoord(coords);
  const y = yCoord(coords);

  shotsAgainst[y][x] = bool;
  console.log(shotsAgainst[y][x])
  return shotsAgainst;
};

export default shotsAgainstPlacer;
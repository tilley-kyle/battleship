import yCoord from './yCoord';
import xCoord from './xCoord';

const radarPlacer = (coords, radar, bool) => {
  const x = xCoord(coords);
  const y = yCoord(coords);

  radar[y][x] = bool ? 'X' : 'M';
  return radar;
};

export default radarPlacer;
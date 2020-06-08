import yCoord from './yCoord';
import xCoord from './xCoord';

const radarPlacer = (coords, radar) => {
  const x = xCoord(coords);
  const y = yCoord(coords);
  radar[y][x] = 'X';
  return radar;
};

export default radarPlacer;
import xCoord from './xCoord';
import yCoord from './yCoord';

const radarHit = (coords, board) => {
  const x = xCoord(coords);
  const y = yCoord(coords);
  if (board[y][x]) {
    return true;
  }
  return false;
};

export default radarHit;
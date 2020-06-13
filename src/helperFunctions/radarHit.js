import xCoord from './xCoord';
import yCoord from './yCoord';

const radarHit = (coords, board, hits) => {
  const x = xCoord(coords);
  const y = yCoord(coords);
  if (board[y][x]) {
    if (hits.indexOf(coords) === -1) {
      hits.push(coords);
      return hits;
    }
    return true;
  }
  return false;
};

export default radarHit;
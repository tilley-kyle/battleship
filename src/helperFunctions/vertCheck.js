import xCoord from './xCoord';
import yCoord from './yCoord';


const vertCheck = (board, ship, coords) => {
  const shipSizes = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolboat: 2,
  }
  const length = shipSizes[ship];
  for (let i = 0; i < length; i += 1) {
    if (yCoord(coords) + i > 9) {
      return null;
    }
    if (!board[yCoord(coords) + i][xCoord(coords)] ) {
      continue;
    } else {
      return null;
    }
  };
  return true;
}

export default vertCheck;
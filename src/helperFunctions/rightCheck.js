import xCoord from './xCoord';
import yCoord from './yCoord';


const rightCheck = (board, ship, coords) => {
  const shipSizes = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    PatrolBoat: 2,
  }
  const length = shipSizes[ship];
  for (let i = 0; i < length; i += 1) {
    if (xCoord(coords) + i > 9) {
      return null;
    }
    if (!board[yCoord(coords)][xCoord(coords) + 1] ) {
      continue;
    } else {
      return null;
    }
  };
  return true;
}

export default rightCheck;
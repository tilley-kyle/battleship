import xCoord from './xCoord';
import yCoord from './yCoord';


const upCheck = (board, ship, coords) => {
  const shipSizes = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    PatrolBoat: 2,
  }
  const length = shipSizes[ship];
  for (let i = 0; i < length; i += 1) {
    if (yCoord(coords) - i < 0) {
      console.log('here')
      return null;
    }
    if (!board[yCoord(coords) - i][xCoord(coords)] ) {
      continue;
    } else {
      return null;
    }
  };
  return true;
}

export default upCheck;
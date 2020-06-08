import yCoord from './yCoord';
import xCoord from './xCoord';

const shipPlacer = (board, ship, coords) => {
  const shipSizes = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    PatrolBoat: 2,
  }
  const length = shipSizes[ship];
  for (let i = 0; i < length; i += 1) {
    board[yCoord(coords) + i][xCoord(coords)] = ship[0];
  }
  return board;
};

export default shipPlacer;
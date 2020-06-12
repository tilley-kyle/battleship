import yCoord from './yCoord';
import xCoord from './xCoord';

const shipPlacer = (board, ship, coords, direction) => {
  const shipSizes = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    PatrolBoat: 2,
  }
  const length = shipSizes[ship];
  for (let i = 0; i < length; i += 1) {
    if (direction === 'down') {
      board[yCoord(coords) + i][xCoord(coords)] = ship[0];
    } else if (direction === 'up') {
      board[yCoord(coords) - i][xCoord(coords)] = ship[0];
    } else if (direction === 'right') {
      board[yCoord(coords)][xCoord(coords) + i] = ship[0];
    } else if (direction === 'left') {
      board[yCoord(coords)][xCoord(coords) - i] = ship[0];
    }
  }
  return board;
};

export default shipPlacer;
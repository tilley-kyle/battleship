import yCoord from './yCoord';
import xCoord from './xCoord';

const shipPlacer = (board, ship, coords) => {
  const shipSizes = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolboat: 2,
  }
  const length = shipSizes[ship];
  for (let i = 0; i < length; i += 1) {
    board[yCoord(coords) + i][xCoord(coords)] = ship[0];
  }
  return board;
};

export default shipPlacer;
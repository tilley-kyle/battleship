import downCheck from './downCheck';
import upCheck from './upCheck';
import rightCheck from './rightCheck';
import leftCheck from './leftCheck';

const directionalChecker = (board, ship, coords, direction) => {
  if (direction === 'down') return downCheck(board, ship, coords);
  if (direction === 'up') return upCheck(board, ship, coords);
  if (direction === 'right') return rightCheck(board, ship, coords);
  if (direction === 'left') return leftCheck(board, ship, coords);
};

export default directionalChecker;
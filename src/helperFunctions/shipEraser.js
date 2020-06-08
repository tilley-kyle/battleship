const shipEraser = (board, ship) => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (board[i][j] === ship[0]) {
        board[i][j] = null;
      }
    }
  }
  return board;
};

export default shipEraser;
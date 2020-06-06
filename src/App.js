import React from 'react';
import './stylesheet.css';

import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      board1: [[],[],[],[],[],[],[],[],[],[]],
      oppBoard1: [[],[],[],[],[],[],[],[],[],[]],
      board2: [[],[],[],[],[],[],[],[],[],[]],
      oppBoard2: [[],[],[],[],[],[],[],[],[],[]],
      scores: {
        player1: 0,
        player2: 0,
      }
    }
  }

  render() {
    return (
      <div className="container">
        <h2 className="title">BattleShip: The Game... Onlinified</h2>
        <div className="board">
          <Board />
        </div>
      </div>
    )
  }
}


export default App;

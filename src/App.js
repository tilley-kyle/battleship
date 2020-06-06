import React from 'react';
import './stylesheet.css';

import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      board1: [[], [], [], [], [], [], [], [], [], []],
      radar1: [[], [], [], [], [], [], [], [], [], []],
      board2: [[], [], [], [], [], [], [], [], [], []],
      radar2: [[], [], [], [], [], [], [], [], [], []],
      scores: {
        player1: 0,
        player2: 0,
      }
    }
  }

  render() {
    return (
      <div className="total-container">
        <div className="title-container">
          <h2 className="title">BattleShip: The Game... Onlinified</h2>
        </div>
        <div className="board-container">
          <div className="home-board">
            <Board />
          </div>
          <div className="radar">
            <Board />
          </div>
        </div>
      </div>
    )
  }
}


export default App;

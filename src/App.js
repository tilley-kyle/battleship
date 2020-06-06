import React from 'react';
import './stylesheet.css';

import Board from './components/Board.jsx';
import Radar from './components/Radar.jsx';

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
    this.handleClickYF = this.handleClickYF.bind(this);
    this.handleClickRadar = this.handleClickRadar.bind(this);
  }

  handleClickYF (e) {
    e.preventDefault();
    console.log('fleet')
  }

  handleClickRadar (e) {
    e.preventDefault();
    console.log('radar')
  }

  render() {
    return (
      <div className="total-container">
        <div className="heading-container">
          <h2 className="title">BattleShip: The Game... Onlinified</h2>
          <div className="board-labels">
            <div className="label-title">Your Fleet</div>
            <div className="label-title">Radar</div>
          </div>
        </div>
        <div className="board-container">
          <div className="home-board">
            <Board handleClick={this.handleClickYF} />
          </div>
          <div className="radar">
            <Radar handleClick={this.handleClickRadar} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;

import React from 'react';
import './stylesheet.css';

import Board from './components/Board.jsx';
import Radar from './components/Radar.jsx';
import Setup from './components/Setup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'setup',
      ship: 'carrier',
      direction: 'down',
      turn: 1,
      board1: [[], [], [], [], [], [], [], [], [], []],
      radar1: [[], [], [], [], [], [], [], [], [], []],
      board2: [[], [], [], [], [], [], [], [], [], []],
      radar2: [[], [], [], [], [], [], [], [], [], []],
      scores: {
        player1: 0,
        player2: 0,
      },
    };
    this.handleClickYF = this.handleClickYF.bind(this);
    this.handleClickRadar = this.handleClickRadar.bind(this);
    this.shipSelector = this.shipSelector.bind(this);
  }

  handleClickYF(coords) {
    console.log(coords)
  }

  handleClickRadar(coords) {
    console.log(coords)
  }

  shipSelector(e) {
    e.preventDefault();
    this.setState({ship: e.target.id})
  }



  render() {
    const { turn, stage, ship, direction } = this.state;
    if (stage === 'setup') {
      return (
        <div className="total-container">
          <div className="heading-container">
            <h2 className="title">BattleShip: The Game... Onlinified</h2>
            <div className="board-labels">
              <div className="label-title">Admiral {turn}'s Fleet</div>
              <div className="label-title">Deployment Console</div>
            </div>
          </div>
          <div className="board-container">
            <div className="home-board">
              <Board handleClick={this.handleClickYF} />
            </div>
            <div>
              <Setup ship={ship} direction={direction} shipSelector={this.shipSelector} />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="total-container">
          <div className="heading-container">
            <h2 className="title">BattleShip: The Game... Onlinified</h2>
            <div className="board-labels">
              <div className="label-title">Admiral {turn}'s Fleet</div>
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
}


export default App;

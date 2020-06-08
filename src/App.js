import React from 'react';
import './stylesheet.css';

import Board from './components/Board';
import Radar from './components/Radar';
import Setup from './components/Setup';

import vertCheck from './helperFunctions/vertCheck';
import shipPlacer from './helperFunctions/shipPlacer';
import shipEraser from './helperFunctions/shipEraser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'setup',
      ship: '',
      direction: 'down',
      turn: 1,
      player1Setup: {},
      player2Setup: {},
      currBoard: [[], [], [], [], [], [], [], [], [], []],
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
    this.handleClickSetup = this.handleClickSetup.bind(this);
  }

  handleClickYF(coords) {
    console.log(coords)
  }

  handleClickRadar(coords) {
    console.log(coords)
  }

  shipSelector(e) {
    e.preventDefault();
    const { player1Setup, board1, ship } = this.state;
    if (player1Setup[e.target.id] === true) {
      shipEraser(board1, ship);
    }
    this.setState({ship: e.target.id})
  }

  handleClickSetup(coords) {
    const { board1, ship, player1Setup } = this.state;
    const currSetup = player1Setup;
    if (vertCheck(board1, ship, coords)) {
      currSetup[ship] = true;
      this.setState({
        board1: shipPlacer(board1, ship, coords),
        player1Setup: currSetup,
        ship: '',
      });
    } else {
      alert ('invalid placement');
    }
  }


  render() {
    const { turn, stage, ship, direction, board1 } = this.state;
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
              <Board board={board1} handleClick={this.handleClickSetup} />
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
              <Board board={board1} handleClick={this.handleClickYF} />
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

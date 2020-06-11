import React from 'react';
import './stylesheet.css';
import axios from 'axios';
// import { Socket } from 'react-socket-io';
import socketIOClient from 'socket.io-client';

import Board from './components/Board';
import Conditional from './components/Conditional';

import vertCheck from './helperFunctions/vertCheck';
import shipPlacer from './helperFunctions/shipPlacer';
import shipEraser from './helperFunctions/shipEraser';
import checkPlayerReady from './helperFunctions/checkPlayerReady';
import radarHit from './helperFunctions/radarHit';
import radarPlacer from './helperFunctions/radarPlacer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'http://localhost:8154/',
      endpointTest: 'http://localhost:8154/test',
      playersController: {
        player1: false,
        player2: false,
        playerID: false,
      },
      stage: 'setup',
      ship: '',
      direction: 'down',
      turn: 1,
      player1Setup: {},
      player2Setup: {},
      turn1: {
        board: [[], [], [], [], [], [], [], [], [], []],
        radar: [[], [], [], [], [], [], [], [], [], []],
        hits: 0,
      },
      turn2: {
        board: [[], [], [], [], [], [], [], [], [], []],
        radar: [[], [], [], [], [], [], [], [], [], []],
        hits: 0,
      },
      scores: {
        player1: 0,
        player2: 0,
      },
    };
    this.handleClickRadar = this.handleClickRadar.bind(this);
    this.shipSelector = this.shipSelector.bind(this);
    this.handleClickSetup = this.handleClickSetup.bind(this);
    this.handleDeploy = this.handleDeploy.bind(this);
    this.socket = socketIOClient(this.state.endpoint);
  }

  componentDidMount() {
    const { playersController } = this.state;
    axios.get('/start')
      .then((res) => {
      })
    if (!playersController.player1) {
      playersController.player1 = true;
      this.setState(playersController);
      this.setState({ playerID: 1 });
    }
  }

  handleClickRadar(coords) {
    const { turn, turn1, turn2 } = this.state;
    const currTurn = turn === 1 ? turn1 : turn2;
    const otherTurn = turn === 2 ? turn1 : turn2;
    const turnNum = turn === 1 ? 2 : 1;
    let { scores } = this.state;
    if (radarHit(coords, otherTurn.board)) {
      currTurn.radar = radarPlacer(coords, currTurn.radar, true);
      currTurn.hits = currTurn.hits += 1;
      this.setState(currTurn);
      setTimeout(() => {
        this.setState({ turn: turnNum })
      }, 1000);
    } else {
      currTurn.radar = radarPlacer(coords, currTurn.radar, false);
      this.setState(currTurn);
      setTimeout(() => {
        this.setState({ turn: turnNum })
      }, 1000);
    }
    if (currTurn.hits === 17) {
      console.log(scores)
      alert('Player 1 Wins!');
      scores.player1 += 1;
      axios.put('http://127.0.0.1:8153/result', scores);
    }
  }

  shipSelector(e) {
    e.preventDefault();
    const { player1Setup, turn, turn1, turn2 } = this.state;
    const currTurn = turn === 1 ? turn1 : turn2;
    const currSetup = player1Setup;
    if (player1Setup[e.target.id] === true) {
      shipEraser(currTurn.board, e.target.id);
      currSetup[e.target.id] = false;
      this.setState({ player1Setup: currSetup });
    }
    this.setState({ ship: e.target.id });
  }

  handleClickSetup(coords) {
    const { ship, player1Setup, turn, turn1, turn2 } = this.state;
    const currTurn = turn === 1 ? turn1 : turn2;
    const currSetup = player1Setup;
    if (vertCheck(currTurn.board, ship, coords)) {
      currSetup[ship] = true;
      currTurn.board = shipPlacer(currTurn.board, ship, coords);
      this.setState(currTurn);
    } else {
      alert('invalid placement');
    }
    if (checkPlayerReady(player1Setup)) {
      this.setState({ stage: 'ready1' })
    }
  }

  handleDeploy(e) {
    e.preventDefault();
    const { turn } = this.state;
    if (turn === 1) {
      this.setState({ turn: 2 });
    } else if (turn === 2) {
      this.setState({ stage: 'battle', turn: 1 });
    }
  }

  switch(e) {
    e.preventDefault();
    if (this.state.stage === "setup") {
      this.setState({ stage: 'battle' });
    } else {
      this.setState({ stage: 'setup' });
    }
    // const socket = socketIOClient(this.state.endpoint);
    // const test = socketIOClient(this.state.endpointTest);
    this.socket.emit('test', this.state.turn);
  }


  render() {
    const { turn, stage, ship, direction, turn1, turn2 } = this.state;
    const currTurn = turn === 1 ? turn1 : turn2;
    const otherTurn = turn === 2 ? turn1 : turn2;
    const headerRight = stage !== 'battle' ? 'Deployment Console' : 'Radar';
    return (
      <div className="total-container">
        <div className="heading-container">
          <h2 className="title">BattleShip: The Game... Onlinified</h2>
          <div className="board-labels">
            <div className="label-title">Admiral {turn}'s Fleet</div>
            <div className="label-title">{headerRight}</div>
          </div>
        </div>
        <div className="board-container">
          <div className="home-board">
            <Board currTurn={currTurn} otherTurn={otherTurn} stage={stage} handleClick={this.handleClickSetup} />
          </div>
          <Conditional
            ship={ship}
            direction={direction}
            stage={stage}
            currTurn={currTurn}
            otherTurn={otherTurn}
            shipSelector={this.shipSelector}
            handleDeploy={this.handleDeploy}
            handleClick={this.handleClickRadar}
          />
        </div>
        <button className="temp" onClick={(e) => this.switch(e)}>switch to radar</button>
      </div>
    )

  }
}


export default App;

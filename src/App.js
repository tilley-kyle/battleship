import React from 'react';
import './stylesheet.css';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import Board from './components/Board';
import BoardHeader from './components/BoardHeader';
import Conditional from './components/Conditional';

import directionalChecker from './helperFunctions/directionalChecker';
import shipPlacer from './helperFunctions/shipPlacer';
import shipEraser from './helperFunctions/shipEraser';
import checkPlayerReady from './helperFunctions/checkPlayerReady';
import radarHit from './helperFunctions/radarHit';
import radarPlacer from './helperFunctions/radarPlacer';
import turnX from './helperFunctions/turnX';
import playerXReady from './helperFunctions/playerXReady';
import shotsAgainstPlacer from './helperFunctions/shotsAgainstPlacer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: process.env.PORT,
      playerID: 0,
      stage: 'setup',
      player1Ready: false,
      player2Ready: false,
      ship: '',
      direction: 'down',
      turn: 1,
      player1Setup: {},
      player2Setup: {},
      shotsAgainst: [[], [], [], [], [], [], [], [], [], []],
      turn1: {
        board: [[], [], [], [], [], [], [], [], [], []],
        radar: [[], [], [], [], [], [], [], [], [], []],
        hits: 0,
        ready: false,
      },
      turn2: {
        board: [[], [], [], [], [], [], [], [], [], []],
        radar: [[], [], [], [], [], [], [], [], [], []],
        hits: 0,
        ready: false,
      },
      scores: {
        player1: 0,
        player2: 0,
      },
      hitsArr: [],
    };
    this.handleClickRadar = this.handleClickRadar.bind(this);
    this.shipSelector = this.shipSelector.bind(this);
    this.handleClickSetup = this.handleClickSetup.bind(this);
    this.handleDeploy = this.handleDeploy.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.socket = socketIOClient(this.state.endpoint);
    this.socket.on('join', (resNum) => {
      this.setState({ playerID: resNum });
    });
    this.socket.on('deploy', async (state) => {
      await this.setState(turnX(state, this.state.playerID));
      await this.setState(playerXReady(state, this.state.playerID));
      if (this.state.player1Ready && this.state.player2Ready) {
        this.setState({ stage: 'battle' });
        this.socket.emit('battle', 'battle');
      }
    });
    this.socket.on('battle', (toBattle) => {
      this.setState({ stage: 'battle' });
    });
    this.socket.on('hit', (coords) => {
      const newTurn = this.state.turn === 1 ? 2 : 1;
      this.setState({
        turn: newTurn,
        shotsAgainst: shotsAgainstPlacer(coords, this.state.shotsAgainst, true),
       });
    });
    this.socket.on('miss', (coords) => {
      const newTurn = this.state.turn === 1 ? 2 : 1;
      this.setState({
        turn: newTurn,
        shotsAgainst: shotsAgainstPlacer(coords, this.state.shotsAgainst, false),
       });
    });
    this.socket.on('win', (winner) => {
      alert(`Admiral ${winner} has Defeated You!`);
      this.setState({ stage: 'end' });
    });
    this.socket.on('restart', async (state) => {
      for (const prop in state.state) {
        await this.setState({ [prop]: state.state[prop] });
      }
      if (this.state.playerID === 0) {
        this.socket.emit('player select');
      }
    });
    this.socket.on('player select', (playerID) => {
      if (playerID) {
        this.setState({ playerID: playerID});
      }
    })
  }

  componentDidMount() {
    // axios.get('/start')
    //   .then((res) => {
    //   })
  }

  handleClickRadar(coords) {
    const { turn, turn1, turn2, playerID, hitsArr } = this.state;
    const currTurn = turn === 1 ? turn1 : turn2;
    const otherTurn = turn === 2 ? turn1 : turn2;
    const turnNum = turn === 1 ? 2 : 1;
    const currTurnObj = playerID === 1 ? 'turn1' : 'turn2';
    let { scores } = this.state;
    if (playerID !== turn) {
      alert(`It's not your turn!`);
      return null;
    }
    const radarHitVar = radarHit(coords, otherTurn.board, hitsArr);
    if (radarHitVar === true) {
      return null;
    } else if (Array.isArray(radarHitVar)) {
      currTurn.radar = radarPlacer(coords, currTurn.radar, true);
      currTurn.hits = currTurn.hits += 1;
      this.setState({ [currTurnObj]: currTurn });
      this.setState({
        turn: turnNum,
        hitsArr: [...hitsArr],
      });
      this.socket.emit('hit', coords);
    } else {
      currTurn.radar = radarPlacer(coords, currTurn.radar, false);
      this.setState({ [currTurnObj]: currTurn });
      this.setState({ turn: turnNum });
      this.socket.emit('miss', coords);
    }
    if (currTurn.hits === 17) {
      setTimeout(() => {
        alert('You Are Victorious!');
        this.setState({ stage: 'end' })
      }, 500);
      this.socket.emit('win', playerID);
      // axios.put('http://127.0.0.1:8153/result', scores);
    }
  }

  shipSelector(e) {
    e.preventDefault();
    const { player1Setup, player2Setup, playerID, turn1, turn2 } = this.state;
    const currTurn = playerID === 1 ? turn1 : turn2;
    const currSetup = playerID === 1 ? player1Setup : player2Setup;
    if (currSetup[e.target.id] === true) {
      shipEraser(currTurn.board, e.target.id);
      currSetup[e.target.id] = false;
      this.setState({ [currSetup]: currSetup });
    }
    this.setState({ ship: e.target.id });
  }

  handleClickSetup(coords) {
    const { ship, player1Setup, player2Setup, turn1, turn2, playerID, direction } = this.state;
    const currTurn = playerID === 1 ? turn1 : turn2;
    const currTurnObj = playerID === 1 ? 'turn1' : 'turn2';
    const currSetup = playerID === 1 ? player1Setup : player2Setup;
    if (directionalChecker(currTurn.board, ship, coords, direction)) {
      currSetup[ship] = true;
      currTurn.board = shipPlacer(currTurn.board, ship, coords, direction);
      this.setState({ [currTurnObj]: currTurn, ship: '' });
    } else {
      alert('invalid placement');
    }
    if (checkPlayerReady(currSetup)) {
      this.setState({ stage: 'ready' })
    }
  }

  async handleDeploy(e) {
    e.preventDefault();
    const { playerID, player1Setup, player2Setup } = this.state;
    const currPlayerReady = playerID === 1 ? 'player1Ready' : 'player2Ready';
    const currSetup = playerID === 1 ? player1Setup : player2Setup;
    const ready = checkPlayerReady(currSetup) ? true : false;
    if (ready) {
      await this.setState({
        [currPlayerReady]: true,
        stage: 'player ready'
      });
    }
    this.socket.emit('deploy', this.state)
  }

  handleDown(key) {
    this.setState({ direction: key });
  }

  handleRestart(e) {
    e.preventDefault();
    this.socket.emit('restart');
  }


  render() {
    const { playerID, turn, stage, ship, direction, turn1, turn2, shotsAgainst } = this.state;
    const playerBoard = playerID === 1 ? turn1 : turn2;
    const headerRight = stage !== 'battle' ? 'Deployment Console' : 'Radar';
    return (
      <div className="total-container">
        <KeyboardEventHandler
          handleKeys={['down', 'left', 'right', 'up']}
          onKeyEvent={(key) => this.handleDown(key)}
        />
        <div className="heading-container">
          <h2 className="title">BattleShip: The Game... Onlinified</h2>
          <div className="board-labels">
            <BoardHeader stage={stage} turn={turn} playerID={playerID} />
            <div className="label-title">{headerRight}</div>
          </div>
        </div>
        <div className="board-container">
          <div className="home-board">
            <Board currTurn={playerBoard} shotsAgainst={shotsAgainst} stage={stage} handleClick={this.handleClickSetup} />
          </div>
          <Conditional
            ship={ship}
            direction={direction}
            stage={stage}
            currTurn={playerBoard}
            shipSelector={this.shipSelector}
            handleDeploy={this.handleDeploy}
            handleClick={this.handleClickRadar}
            handleRestart={this.handleRestart}
          />
        </div>
      </div>
    )

  }
}


export default App;

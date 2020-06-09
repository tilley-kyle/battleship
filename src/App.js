import React from 'react';
import './stylesheet.css';
import axios from 'axios';

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
      turn2 : {
        board: [[], [], [], [], [], [], [], [], [], []],
        radar: [[], [], [], [], [], [], [], [], [], []],
        hits: 0,
      },
      board1: [[], [], [], [], [], [], [], [], [], []],
      radar1: [[], [], [], [], [], [], [], [], [], []],
      hitsBy1: 0,
      board2: [[], [], [], [], [], [], [], [], [], []],
      radar2: [[], [], [], [], [], [], [], [], [], []],
      hitsBy2: 0,
      scores: {
        player1: 0,
        player2: 0,
      },
    };
    this.handleClickRadar = this.handleClickRadar.bind(this);
    this.shipSelector = this.shipSelector.bind(this);
    this.handleClickSetup = this.handleClickSetup.bind(this);
    this.handleDeploy = this.handleDeploy.bind(this);
  }

  componentDidMount () {
    axios.get('/start')
      .then((res) => {
        console.log(res)
      })
  }

  handleClickRadar (coords) {
    const { board1, radar1, turn, turn1, turn2 } = this.state;
    const currTurn = turn === 1 ? turn1 : turn2;
    let { hitsBy1, hitsBy2, scores } = this.state;
    let currHits = turn === 1 ? currTurn.hits : currTurn.hits;
    if (radarHit(coords, currTurn.board)) {
      this.setState({
        [currTurn]: radarPlacer(coords, radar1, true),
        [currHits]: currHits += 1
      });
    } else {
      this.setState({ radar1: radarPlacer(coords, currTurn.radar, false) });
    }
    if (currTurn.hits === 17) {
      console.log(scores)
      alert ('Player 1 Wins!');
      scores.player1 += 1;
      axios.put('http://127.0.0.1:8153/result', scores);
    }
  }

  shipSelector (e) {
    e.preventDefault();
    const { player1Setup, board1, turn, turn1, turn2 } = this.state;
    const currTurn = turn === 1 ? turn1 : turn2;
    const currSetup = player1Setup;
    if (player1Setup[e.target.id] === true) {
      shipEraser(currTurn.board, e.target.id);
      currSetup[e.target.id] = false;
      this.setState({ player1Setup: currSetup });
    }
    this.setState({ ship: e.target.id });
  }

  handleClickSetup (coords) {
    const { board1, ship, player1Setup, turn, turn1, turn2 } = this.state;
    const currTurn = turn === 1 ? turn1 : turn2;
    const currSetup = player1Setup;
    if (vertCheck(currTurn.board, ship, coords)) {
      currSetup[ship] = true;
      this.setState({
        board1: shipPlacer(currTurn.board, ship, coords),
        player1Setup: currSetup,
        ship: '',
      });
    } else {
      alert ('invalid placement');
    }
    if (checkPlayerReady(player1Setup)) {
      this.setState({ stage: 'ready1' })
    }
  }

  handleDeploy (e) {
    e.preventDefault();
    this.setState({ stage: 'battle' })
  }


  render() {
    const { turn, stage, ship, direction, board1, radar1, turn1, turn2 } = this.state;
    const currTurn = turn === 1 ? turn1 : turn2;
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
              <Board currTurn={currTurn} board={board1} stage={stage} handleClick={this.handleClickSetup} />
            </div>
              <Conditional
                ship={ship}
                direction={direction}
                stage={stage}
                currTurn={currTurn}
                board={board1}
                radar={radar1}
                shipSelector={this.shipSelector}
                handleDeploy={this.handleDeploy}
                handleClick={this.handleClickRadar}
              />
          </div>
        </div>
      )

  }
}


export default App;

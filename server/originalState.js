exports.state = {
  endpoint: 'http://localhost:8154/',
  playerID: 0,
  stage: 'setup',
  player1Ready: false,
  player2Ready: false,
  ship: '',
  direction: 'down',
  turn: 1,
  player1Setup: {},
  player2Setup: {},
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
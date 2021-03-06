exports.state = {
  endpoint: process.env.PORT,
  playerID: 0,
  stage: 'setup',
  player1Ready: false,
  player2Ready: false,
  ship: '',
  direction: 'down',
  turn: 1,
  lastShot: {},
  player1Setup: {},
  player2Setup: {},
  shotsAgainst: {},
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
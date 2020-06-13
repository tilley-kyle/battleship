const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const bp = require('body-parser');
const state = require('./originalState');

// const { getScores, putScores } = require('./controllers');

app.use(cors());
app.use(bp.json());
app.use(express.static('build'));

// app.get('/start', getScores);

// app.put('/result', putScores);

let playerCount = 0;
let player1 = false;
let player2 = false;

io.on('connection', (socket) => {
  playerCount += 1;
  console.log('a user connected, dawg. COUNT: ', playerCount);
  if (player1 === false) {
    player1 = true;
    socket.emit('join', 1);
  } else if (player2 === false) {
    player2 = true;
    socket.emit('join', 2);
  }
  socket.on('deploy', (state) => {
    socket.broadcast.emit('deploy', state);
  });
  socket.on('battle', (toBattle) => {
    player1 = false;
    player2 = false;
    socket.broadcast.emit('battle', toBattle);
  });
  socket.on('hit', (hitCoord) => {
    socket.broadcast.emit('hit', hitCoord);
  });
  socket.on('miss', (missCoord) => {
    socket.broadcast.emit('miss', missCoord)
  });
  socket.on('win', (winner) => {
    socket.broadcast.emit('win', winner)
  })
  socket.on('restart', () => {
    player1 = false;
    player2 = false;
    socket.emit('restart', state);
    socket.broadcast.emit('restart', state);
  });
  socket.on('player select', () => {
    if (!player1) {
      socket.emit('player select', 1);
      player1 = true;
    } else if (player1 && ! player2) {
      socket.emit('player select', 2);
      player2 = true;
    } else if (player1 && player2) {
      socket.emit('player select', false);
    }
  })
  socket.on('disconnect', () => {
    playerCount -= 1;
    console.log('the user has left, dawg. COUNT: ', playerCount);
    if (playerCount === 0) {
      player1 = false;
      player2 = false;
    }
  });
});

http.listen((process.env.PORT || 8154), () => {
  console.log('http listening on 8154');
});
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const bp = require('body-parser');

const { getScores, putScores } = require('./controllers');

app.use(cors());
app.use(bp.json());
app.use(express.static('build'));

app.get('/start', getScores);

app.put('/result', putScores);

let playerCount = 0;

io.on('connection', (socket) => {
  playerCount += 1;
  console.log('a user connected, dawg. COUNT: ', playerCount);

  socket.emit('join', playerCount)

  socket.on('deploy', (state) => {
    socket.broadcast.emit('deploy', state);
  });

  socket.on('battle', (toBattle) => {
    socket.broadcast.emit('battle', toBattle);
  });

  socket.on('disconnect', () => {
    playerCount -= 1;
    console.log('the user has left, dawg. COUNT: ', playerCount);
  });
});

http.listen(8154, () => {
  console.log('http listening on 8154');
});
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const bp = require('body-parser');

const { getScores, putScores } = require('./controllers');

// const port = 8153;
// app.listen(port, () => console.log(`listening on ${port}`));
app.use(cors());
app.use(bp.json());
app.use(express.static('build'));

app.get('/start', getScores);

app.put('/result', putScores);

let  playersController = {
  player1: false,
  player2: false,
  playerID: false,
};

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('test', (test) => {
    console.log(test)
    socket.emit('test', 'hiya');
  });
  socket.emit('test', 'hiya');
  socket.on('disconnect', () => {
    console.log('the user has left, dawg');
  });
});

const test = io.of('/test')
test.on('connection', (socket) => {
  socket.on('test', (test) => {
    console.log('hi')
  })
})



http.listen(8154, () => {
  console.log('http listening on 8154');
});
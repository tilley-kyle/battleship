const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const cors = require('cors');
const bp = require('body-parser');

const { getScores, putScores } = require('./controllers');

// const port = 8153;
// app.listen(port, () => console.log(`listening on ${port}`));
app.use(cors());
app.use(bp.json());
app.use(express.static('build'));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

app.get('/start', getScores);

app.put('/result', putScores);

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(8154, () => {
  console.log('http listening on 8154');
});
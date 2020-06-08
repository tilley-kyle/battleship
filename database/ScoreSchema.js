const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Battleship', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', () => console.log('Danger Will Robinson'));

const scoreSchema = new mongoose.Schema({
  player1: Number,
  player2: Number,
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
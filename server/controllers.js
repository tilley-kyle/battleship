const Score = require('../database/ScoreSchema');

exports.getScores = (req, res) => {
  Score.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(404).send();
    });
};

exports.putScores = (req, res) => {
  console.log(req.body);
}
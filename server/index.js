const express = require('express');
const cors = require('cors');

const { getScores, putScores } = require('./controllers');

const app = express();

const port = 8153;
app.listen(port, () => console.log(`listening on ${port}`))
app.use(cors());

app.get('/start', getScores);

app.put('/result', putScores);
const express = require('express');
const cors = require('cors');

const app = express();

const port = 8153;
app.listen(port, () => console.log(`listening on ${port}`))
app.use(cors());

app.get('/start', (req, res) => {

});

app.put('/result', (req, res) => {

});
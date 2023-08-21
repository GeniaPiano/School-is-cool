const express = require('express');
const app = express();
const {voteRouter} = require('./routes/vote.js');

app.use(express.json());
app.use(express.static('public'));
app.use('/vote', voteRouter);


app.listen(3000, );
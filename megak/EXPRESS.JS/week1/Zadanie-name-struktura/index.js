const express = require('express');
const {rateLimit} = require('express-rate-limit');
const {nameRouter} = require('./routes/name')

const limiter = rateLimit({
    windows:3 * 60 * 1000, //3 minuty
    max: 5, // limit each IP to 5 requests per window
});

const app = express();

app.use(limiter);

//można też tak, bez zapisywania limitera do zmiennej:
// app.use(rateLimit({
//     windows:3 * 60 * 1000, //3 minuty
//     max: 5, // limit each IP to 5 requests per window
// }));


app.use(express.json());

app.use('/name', nameRouter);





    app.listen(3000);

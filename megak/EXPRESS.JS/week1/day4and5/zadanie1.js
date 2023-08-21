const express = require('express');

const app = express();

app.get('/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params;
    const sum = Number(num1) + Number(num2);
    res.send(sum.toString())

});

app.listen(3000);
const express = require('express');
const {appendFile, readFile} = require('fs').promises;
const app = express();
let num;

app.get('/number/set/:num', async (req, res) => {
    num = req.params.num;
    res.send(num);
    await appendFile ('numbers.txt',  `\n${num}`, 'utf8');
});

app.get('/number/all', async(req, res)=>  {
    try {
        const nums = await readFile('numbers.txt', 'utf8');
        res.send(nums);
        const arr = nums
            .split('\n')
            .reduce((a, b) => {
                return Number(a) + Number(b)
                }, 0);
            res.send(arr.toString());

    } catch (e) {
        res.send('No data!')
    }
});



//const arrayOfNumbers = numbers.split(' ');


app.listen(3000);


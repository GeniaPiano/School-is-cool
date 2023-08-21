const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json()); //middleware
app.use(express.static('public', ));

app.use(cookieParser());

// app.use(express.static('public', {
//     index: 'home.html'
// }));


app.get('/cookies', (req, res) => {
    console.log(req.cookies['ciastko drugie']);
    res.send('ok.')
});



app.listen(3000);

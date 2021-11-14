console.log('Look at my first server!')


let total = [];

const express = require('express');

const app = express();

app.use(express.static('./server/public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/server-calculator', (req, res) => {
    console.log('in GET /server-calculator');
    res.send(total);
});



app.post('/server-calculator', (req, res) => {
    console.log('in POST /server-calculator');

    console.log('req.body', req.body);

    total.push(req.body);

    res.sendStatus(201);
})


app.listen(5000, function() {
    console.log('Your first express server is running!')
  });
const express = require('express');

const app = express();

app.listen('3000');

app.use(express.json())

/* app.route('/').get ((req, res) => res.send("<h1>Hello</h1>") )

app.route('/sobre').get ((req, res) => res.send("<p><strong>Hello sobre</strong></p>") )

app.use(express.json());

 app.route('/').post( (req, res) => res.send(req.body) );


let author = "Felipe"
app.route('/').put((req , res) => {
    author = req.body
    res.send(author);
}) */


const express = require('express');

const app = express();

app.listen('3000');

app.route('/').get ((req, res) => res.send("<h1>Hello</h1>") )

app.route('/sobre').get ((req, res) => res.send("<p><strong>Hello sobre</strong></p>") )
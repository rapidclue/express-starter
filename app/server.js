'use strict';

const express = require('express');
const helper = require('../helper')

const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(helper.sayHello(req.query.name || null));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
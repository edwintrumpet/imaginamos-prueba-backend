const express = require('express');
const debug = require('debug')('app:server');
const { config } = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(config.port, (err) => {
  if (err) debug(err);
  else debug(`Listening on http://localhost:${config.port}`);
});

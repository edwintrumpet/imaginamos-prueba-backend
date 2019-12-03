const express = require('express');
const debug = require('debug')('app:server');
const { config } = require('./config');
const deliveriesRoutes = require('./routes/deliveries');

const app = express();

deliveriesRoutes(app);

app.listen(config.port, (err) => {
  if (err) debug(err);
  else debug(`Listening on http://localhost:${config.port}`);
});

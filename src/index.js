const express = require('express');
const debug = require('debug')('app:server');
const { config } = require('./config');
const deliveriesRoutes = require('./routes/deliveries');
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');

const app = express();

app.use(express.json());

// Routes
deliveriesRoutes(app);

// Catch 404
app.use(notFoundHandler);

// Handle errors
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, (err) => {
  if (err) debug(err);
  else debug(`Listening on http://localhost:${config.port}`);
});

/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const { router, errorHandler } = require('./middleware');

/**
 * Starts up the local express server
 * @param {ExpressApp} server the express app object used to start the server
 */
function startServer(server) {
  server.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json()); // parses requests with JSON payloads
app.use(router);
app.use(errorHandler);

startServer(app);

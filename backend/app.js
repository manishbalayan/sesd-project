// app.js
// Sets up the Express app — middleware, route mounting, and error handling.
// The actual route definitions are in routes/index.js.

const express = require('express');
const app = express();

// parse JSON request bodies
app.use(express.json());

// mount all API routes under /api
// const routes = require('./routes');
// app.use('/api', routes);

// basic error handler (will be expanded later)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

module.exports = app;

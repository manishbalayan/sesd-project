// server.js
// Entry point — connects to the database and starts listening for requests.
// For now this is mostly stubbed out until the DB and routes are wired up.

const app = require('./app');
const config = require('./config');

const PORT = config.PORT;

// initialize Prisma client and connect to MongoDB here
// (will be added in later milestones)

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

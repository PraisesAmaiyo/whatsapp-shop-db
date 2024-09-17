// const jsonServer = require('json-server');

// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080;

// server.use(middlewares);
// server.use(router);

// server.listen(port);

// import jsonServer from 'json-server'; // importing json-server
// import cors from 'cors'; // importing cors for cross-origin requests

const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // point to your db.json file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // set your port, e.g., 8080

server.use(cors()); // enable cors
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

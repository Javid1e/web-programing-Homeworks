const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("../Store/db.json");
const CustomRoutesMiddleware = require("./CustomRoutesMiddlewares");
const middlewares = jsonServer.defaults();
// Set up default middlewares
server.use(middlewares);
server.use(CustomRoutesMiddleware);
server.use(router);

// Start the server
const PORT = process.env.PORT || 3008;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the server as a module
module.exports = server;

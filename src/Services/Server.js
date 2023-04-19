const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../Store/db.json');
const middlewares = jsonServer.defaults();

// Set up default middlewares
server.use(middlewares);

// Set up custom routes
server.get('/echo', (req, res) => {
    res.jsonp(req.query);
});
server.get('/fals/random', (req, res) => {
    // TODO: Return a random fal from the database
});
// Set up router middleware
server.use(router);

// Start the server
const PORT = process.env.PORT || 3008;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the server as a module
module.exports = server;
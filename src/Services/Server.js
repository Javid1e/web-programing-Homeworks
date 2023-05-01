const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("../Store/db.json");
const middlewares = jsonServer.defaults();
// Set up default middlewares
server.use(middlewares);

// Set up custom routes
//homeWorksDetails
server.get("/homeWorksDetails", (req, res) => {
  const details = router.db.get("homeWorksDetails[0].details");
  res.json(details);
});
//homeWork1Details
server.get("/homeWork1Details", (req, res) => {
  const details = router.db.get("homeWork1Questions[0].details");
  res.json(details);
});
//homeWork2Details
server.get("/homeWork2Details", (req, res) => {
  const details = router.db.get("homeWork2Questions[0].details");
  res.json(details);
});
//homeWork3Details
server.get("/homeWork3Details", (req, res) => {
  const details = router.db.get("homeWork3Questions[0].details");
  res.json(details);
});
//homeWork1Questions
server.get("/homeWork1Questions", (req, res) => {
  const details = router.db.get("homeWork1Questions[1].questions");
  res.json(details);
});
//homeWork2Questions
server.get("/homeWork2Questions", (req, res) => {
  const details = router.db.get("homeWork2Questions[1].questions");
  res.json(details);
});
//homeWork3Questions
server.get("/homeWork3Questions", (req, res) => {
  const details = router.db.get("homeWork3Questions[1].questions");
  res.json(details);
});
server.get("/fals/random", (req, res) => {
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

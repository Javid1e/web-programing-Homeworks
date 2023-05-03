const jsonServer = require("json-server");
const router = jsonServer.router("../Store/db.json");
module.exports = (req, res, next) => {
  //homeWorksDetails
  if (req.method === "GET" && req.url.startsWith("/homeWorksDetails")) {
    const details = router.db.get("homeWorksDetails[0].details");
    if (details) {
      res.json(details);
    } else {
      res.status(404).json({ error: "HomeWorksDetails Not Found" });
    }
  }
  //homeWork1Details
  else if (req.method === "GET" && req.url.startsWith("/homeWork1Details")) {
    const details = router.db.get("homeWork1Questions[0].details");
    if (details) {
      res.json(details);
    } else {
      res.status(404).json({ error: "HomeWork1Details Not Found" });
    }
  }
  //homeWork2Details
  else if (req.method === "GET" && req.url.startsWith("/homeWork2Details")) {
    const details = router.db.get("homeWork2Questions[0].details");
    if (details) {
      res.json(details);
    } else {
      res.status(404).json({ error: "HomeWork2Details Not Found" });
    }
  }
  //homeWork3Details
  else if (req.method === "GET" && req.url.startsWith("/homeWork3Details")) {
    const details = router.db.get("homeWork3Questions[0].details");
    if (details) {
      res.json(details);
    } else {
      res.status(404).json({ error: "HomeWork3Details Not Found" });
    }
  }
  //homeWork1Questions
  else if (req.method === "GET" && req.url.startsWith("/homeWork1Questions")) {
    const details = router.db.get("homeWork1Questions[1].questions");
    if (details) {
      res.json(details);
    } else {
      res.status(404).json({ error: "HomeWork1Questions Not Found" });
    }
  }
  //homeWork2Questions
  else if (req.method === "GET" && req.url.startsWith("/homeWork2Questions")) {
    const details = router.db.get("homeWork2Questions[1].questions");
    if (details) {
      res.json(details);
    } else {
      res.status(404).json({ error: "HomeWork2Questions Not Found" });
    }
  }
  //homeWork3Questions
  else if (req.method === "GET" && req.url.startsWith("/homeWork3Questions")) {
    const details = router.db.get("homeWork3Questions[1].questions");
    if (details) {
      res.json(details);
    } else {
      res.status(404).json({ error: "HomeWork3Questions Not Found" });
    }
  }
  //homeWork1Question
  else if (req.method === "GET" && req.url.startsWith("/homeWork1Question")) {
    const details = router.db.get("homeWork1Questions[1].questions");
    const questionId = req.url.split("/").pop();
    const question = details.find(
      (question) => question.id === parseInt(questionId)
    );
    if (question) {
      res.json(question);
    } else {
      res
        .status(404)
        .json({ error: `"HomeWork1 Question${questionId}  Not Found"` });
    }
  }
  //homeWork2Question
  else if (req.method === "GET" && req.url.startsWith("/homeWork2Question")) {
    const details = router.db.get("homeWork2Questions[1].questions");
    const questionId = req.url.split("/").pop();
    const question = details.find(
      (question) => question.id === parseInt(questionId)
    );
    if (question) {
      res.json(question);
    } else {
      res
        .status(404)
        .json({ error: `"HomeWork2 Question${questionId}  Not Found"` });
    }
  }
  //homeWork3Question
  else if (req.method === "GET" && req.url.startsWith("/homeWork3Question")) {
    const details = router.db.get("homeWork3Questions[1].questions");
    const questionId = req.url.split("/").pop();
    const question = details.find(
      (question) => question.id === parseInt(questionId)
    );
    if (question) {
      res.json(question);
    } else {
      res
        .status(404)
        .json({ error: `"HomeWork3 Question${questionId}  Not Found"` });
    }
  }
  //homeWork1QuestionExplains
  else if (req.method === "GET" && req.url.startsWith("/homeWork1Explain")) {
    const details = router.db.get("homeWork1Details[0].questions");
    const questionId = req.url.split("/").pop();
    const question = details.find(
      (question) => question.id === parseInt(questionId)
    );
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({
        error: `"HomeWork1 Question${questionId} Explains  Not Found"`,
      });
    }
  }
  //homeWork2QuestionExplains
  else if (req.method === "GET" && req.url.startsWith("/homeWork2Explain")) {
    const details = router.db.get("homeWork2Details[0].questions");
    const questionId = req.url.split("/").pop();
    const question = details.find(
      (question) => question.id === parseInt(questionId)
    );
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({
        error: `"HomeWork2 Question${questionId} Explains  Not Found"`,
      });
    }
  }
  //GetH1A1Poems
  else if (req.method === "GET" && req.url.startsWith("/homeWork1Poems")) {
    const poems = router.db.get("homeWork1Poems[0].falls");
    if (poems) {
      res.json(poems);
    } else {
      res.status(404).json({
        error: `"HomeWork1 Question1 Poems Not Found"`,
      });
    }
  }
  //GetH1A1RandomPoem
  else if (req.method === "GET" && req.url.startsWith("/homeWork1RandomPoem")) {
    const poems = router.db.get("homeWork1Poems[0].falls");
    const min = 1;
    const max = 400;
    const randomId = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toString();
    const randomPoem = poems.find((poem) => poem.id === parseInt(randomId));
    if (randomPoem) {
      res.json(randomPoem);
    } else {
      res.status(404).json({
        error: `"HomeWork1 Question1 Random Poem Not Found"`,
      });
    }
  }
  //GetH1A4Tests
  else if (req.method === "GET" && req.url.startsWith("/homeWork1Tests")) {
    const tests = router.db.get("homeWork1Tests[0].tests");
    if (tests) {
      res.json(tests);
    } else {
      res.status(404).json({
        error: `"HomeWork1 Question4 Tests Not Found"`,
      });
    }
  }
  //GetH1A4HistoryTests
  else if (
    req.method === "GET" &&
    req.url.startsWith("/homeWork1HistoryTests")
  ) {
    const testers = router.db.get("homeWork1TestsHistory[0].testers");
    if (testers) {
      res.json(testers);
    } else {
      res.status(404).json({
        error: `"HomeWork1 Question4 Tests History Not Found"`,
      });
    }
  }
  //GetH1A5Cars
  else if (req.method === "GET" && req.url.startsWith("/homeWork1Cars")) {
    const cars = router.db.get("homeWork1Cars[0].cars");
    if (cars) {
      res.json(cars);
    } else {
      res.status(404).json({
        error: `"HomeWork1 Question5 Cars Not Found"`,
      });
    }
  }
  //GetH1A7SocialMedia
  else if (
    req.method === "GET" &&
    req.url.startsWith("/homeWork1SocialMedia")
  ) {
    const socialMedia = router.db.get("homeWork1Posts[0]");
    if (socialMedia) {
      res.json(socialMedia);
    } else {
      res.status(404).json({
        error: `"HomeWork1 Question7 social Media Not Found"`,
      });
    }
  }
  //GetH1A7AuthorsSocialMedia
  else if (
    req.method === "GET" &&
    req.url.startsWith("/homeWork1AuthorsSocialMedia")
  ) {
    const authors = router.db.get("homeWork1Posts[0].authors");
    if (authors) {
      res.json(authors);
    } else {
      res.status(404).json({
        error: `"HomeWork1 Question7 social Media Authors Not Found"`,
      });
    }
  }
  //GetH1A7PostsSocialMedia
  else if (
    req.method === "GET" &&
    req.url.startsWith("/homeWork1PostsSocialMedia")
  ) {
    const posts = router.db.get("homeWork1Posts[0].posts");
    if (posts) {
      res.json(posts);
    } else {
      res.status(404).json({
        error: `"HomeWork1 Question7 social Media Posts Not Found"`,
      });
    }
  }
  //GetH2A1Tests
  else if (req.method === "GET" && req.url.startsWith("/homeWork2Tests")) {
    const tests = router.db.get("homeWork2Tests[0].tests");
    if (tests) {
      res.json(tests);
    } else {
      res.status(404).json({
        error: `"HomeWork2 Question1 Tests Not Found"`,
      });
    }
  }
  //GetH2A1HistoryTests
  else if (
    req.method === "GET" &&
    req.url.startsWith("/homeWork2HistoryTests")
  ) {
    const testers = router.db.get("homeWork2TestsHistory[0].testers");
    if (testers) {
      res.json(testers);
    } else {
      res.status(404).json({
        error: `"HomeWork2 Question1 Tests History Not Found"`,
      });
    }
  }
  //GetH2A1HistoryTests
  else if (req.method === "GET" && req.url.startsWith("/homeWork2Player")) {
    const players = router.db.get("homeWork2Player[0].players");
    if (players) {
      res.json(players);
    } else {
      res.status(404).json({
        error: `"HomeWork2 Question4 Tests Players Not Found"`,
      });
    }
  } else {
    next();
  }
};

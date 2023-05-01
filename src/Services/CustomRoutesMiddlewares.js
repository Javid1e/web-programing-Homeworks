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
        .json({ error: `"HomeWork1 Question${questionId}  Not found"` });
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
        .json({ error: `"HomeWork2 Question${questionId}  Not found"` });
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
        .json({ error: `"HomeWork3 Question${questionId}  Not found"` });
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
        error: `"HomeWork1 Question${questionId} Explains  Not found"`,
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
        error: `"HomeWork2 Question${questionId} Explains  Not found"`,
      });
    }
  } else {
    next();
  }
};

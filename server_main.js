const express = require("express");
const { listening_port } = require("./src/utils");
const { pushExistingToBuild } = require("./src/scripts");

const api = express();

api.use(express.json());

api.listen(listening_port, () => {
  console.log(`Listening on port ${listening_port}`);
});

api.post("/pushBuild", (req, res) => {
  res.send("script completed successfully");
  pushExistingToBuild({
    repoName: req.body.repoName,
    gitURL: req.body.gitURL,
    main_file: req.body.main_file,
  });

  api.post("/pushNewToBuild", (req, res) => {
    res.send("script completed sucessfully");
    pushNewToBuild({
      repoName: req.body.repoName,
      gitURL: req.body.gitURL,
      main_file: req.body.main_file,
    });
  });
});

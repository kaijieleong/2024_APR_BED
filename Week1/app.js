const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

const path = require("node:path");
const notes = "/notes.txt";

path.dirname(notes);
path.basename(notes);
path.extname(notes);

const fs = require("node:fs");

fs.readFile("/notes.txt", "utf-8", (err, data) => {
  if (!err) {
    console.error(err);
    return;
  }
  console.log(data);
});

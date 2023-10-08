const express = require("express");

const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.json({
    message: "Hallo ini response json",
  });
});

app.get("/users", (req, res) => {
  res.send("Ini tampilan user");
});

app.get("/users/:id", (req, res) => {
  let id = req.params;
  res.send("Ini adalah data user nomor 1");
});

app.listen(port, () => console.log(`Server running on port ${port}`));

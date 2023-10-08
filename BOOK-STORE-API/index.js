const express = require("express");

const app = express();
const port = 3333;

// representasi data dari database
const data_users = [
  { id: 1, name: "Ilham Anugrah", alamat: "Sukabumi" },
  { id: 2, name: "Ghina Khairunnisa", alamat: "Bandung" },
  { id: 3, name: "Hana Syifa", alamat: "Jakarta" },
  { id: 4, name: "Daehan Ibrahim", alamat: "Bandung" },
];

app.get("/", (req, res) => {
  res.json({
    message: "Hallo ini response json",
  });
});

app.get("/users", (req, res) => {
  //mendapatkan data dari database
  const data = data_users;

  //memberikan respon json data
  let result = {
    status: 200,
    data: data,
  };

  res.json(result);
});

app.get("/users/:id", (req, res) => {
  let id = req.params;
  res.send("Ini adalah data user nomor 1");
});

app.listen(port, () => console.log(`Server running on port ${port}`));

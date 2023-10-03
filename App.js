const express = require('express');
const app = express();
const port = 8085;
require("./config")

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

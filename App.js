const express = require('express');
const app = express();
const port = 8085;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('formLogin', 'root', '!h123456', {
  host: "localhost",
  dialect: "mysql"
})

sequelize.authenticate().then(function () {
  console.log('Conectado com sucesso!')
}).catch(function (erro) {
  console.log("Fala ao se conectar: "+erro)
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

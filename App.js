const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Users = require('./public/models/User');
const port = 8085;
require("./config")

// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configurando o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static(__dirname + '/public'));

app.post("/", (req, res) => {
  Users.create({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    senha: req.body.password // Certifique-se de usar o nome do campo correto aqui
  }).then(() => {
    res.sendFile(__dirname + "/public/index.html");
  }).catch((err) => {
    console.error("Erro ao criar usuário:", err);
    res.status(500).send("Erro ao criar usuário");
  });

  
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});


// Rota para lidar com o redirecionamento
app.get('/signup', (req, res) => {
  res.redirect('/register'); // Redireciona para a página 'register.html'
});

app.get('/signin', (req, res) => {
  res.redirect('/'); // Redireciona para a página 'index.html'
});


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

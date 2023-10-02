const express = require('express');
const app = express();
const port = 8084;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

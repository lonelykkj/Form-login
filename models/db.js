const Sequelize = require('sequelize');
const sequelize = new Sequelize('formLogin', 'root', '!h123456', {
  host: "localhost",
  dialect: "mysql"
});

sequelize.authenticate().then(function () {
  console.log('Conectado com sucesso!')
}).catch(function (erro) {
  console.log("Fala ao se conectar: " + erro)
});
  
module.exports = sequelize
const Sequelize = require('sequelize');
const sequelize = require('../../config.js'); // Importe a configuração do banco de dados adequada

const Users = sequelize.define('Users', {
    // Defina os campos da tabela e seus tipos de dados
    name: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true // Defina o campo 'email' como único
    },
    senha: Sequelize.STRING
});

module.exports = Users;
 
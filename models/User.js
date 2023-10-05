const Sequelize = require('sequelize');
const db = require('./db.js'); // Importe a configuração do banco de dados adequada

const User = db.define('Users', {
    // Defina os campos da tabela e seus tipos de dados
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Defina o campo 'email' como único
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

User.sync()
// User.sync({alter: true})

module.exports = User;
 
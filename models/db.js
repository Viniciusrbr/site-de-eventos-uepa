const Sequelize = require('sequelize');

// Config - conexao com o bd sql 
const sequelize = new Sequelize('inscricoes_evento', 'root', '1234admin', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

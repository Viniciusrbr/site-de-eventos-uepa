const Sequelize = require('sequelize');

// Config - conexao com o bd sql 
const sequelize = new Sequelize('postagens', 'root', '1234admin', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

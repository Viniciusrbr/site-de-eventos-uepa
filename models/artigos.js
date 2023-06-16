const db = require('./db');

const artigos = db.sequelize.define('artigos', {
    titulo: {
        type: db.Sequelize.STRING
    },
    resumo: {
        type: db.Sequelize.TEXT
    },
    palavras_chave: {
        type: db.Sequelize.STRING
    },
    autores: {
        type: db.Sequelize.STRING
    },
    afiliacao: {
        type: db.Sequelize.STRING
    },
    categoria: {
        type: db.Sequelize.STRING
    },
    arquivo: {
        type: db.Sequelize.STRING
    }

});

//artigos.sync({force: true});

module.exports = artigos;
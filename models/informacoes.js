const db = require('./db');

const Informacoes = db.sequelize.define('informacoes', {
  sigla: {
    type: db.Sequelize.STRING
  },
  titulo: {
    type: db.Sequelize.STRING
  },
  descricao: {
    type: db.Sequelize.TEXT
  },
  sobre: {
    type: db.Sequelize.STRING
  },
  local: {
    type: db.Sequelize.STRING
  },
  data_inicio: {
    type: db.Sequelize.DATE
  },
  data_fim: {
    type: db.Sequelize.DATE
  }
});

//Informacoes.sync({force: true});

module.exports = Informacoes;
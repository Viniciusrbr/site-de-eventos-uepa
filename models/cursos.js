const db = require('./db');

const Curso = db.sequelize.define('cursos', {
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.STRING
    },
    carga_horaria: {
        type: db.Sequelize.STRING
    }
})

//Curso.sync({force: true});

module.exports = Curso;











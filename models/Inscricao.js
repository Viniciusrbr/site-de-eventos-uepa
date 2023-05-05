const db = require('./db')

const Post = db.sequelize.define('inscricao', {
    nome: {
        type: db.Sequelize.STRING
    },
    cracha: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    modalidade: {
        type: db.Sequelize.STRING
    }
});

//Post.sync({force: true});
module.exports = Post;

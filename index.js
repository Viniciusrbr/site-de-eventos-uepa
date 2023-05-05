const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Inscricao');
const path = require('path');

// Servir arquivos estáticos a partir do diretório 'public'
app.use(express.static(path.join(__dirname, 'src')));

// Config - template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Config - body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/inscrever', function (req, res) {
    res.sendFile(path.join(__dirname, 'src', 'inscricao.html'));
});

app.post('/inscricoes', function (req, res) {

    Post.create({
        nome: req.body.nome,
        cracha: req.body.cracha,
        cpf: req.body.cpf,
        email: req.body.email,
        modalidade: req.body.modalidade
    }).then(function () {
        res.sendFile(path.join(__dirname, 'src', 'index.html'));
        
    }).catch(function (erro) {
        res.send('Erro: Inscrição não realizada com sucesso!' + erro);
    });

});

app.listen(8081, function () {
    console.log('Servidor Rodando');
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Post = require('./models/Inscricao');
const Info = require('./models/informacoes');

const path = require('path');

app.set('view engine', 'ejs')
// mudando a pasta padrao das views
app.set('views', path.join(__dirname, 'src', 'pages'));

// Servir arquivos estáticos a partir do diretório 'public'
app.use(express.static(path.join(__dirname, 'src')));

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

/* admin page config */
app.get('/admin', function (req, res) {
    Info.findAll().then(function (informacoes) {
        res.render('admin', { informacoes: informacoes });
    });
});

app.post('/admin', function (req, res) {
    // Obtenha os dados enviados pelo formulário
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var local = req.body.local;
    var data_inicio = req.body.data_inicio;
    var data_fim = req.body.data_fim;

    // Atualize as informações no banco de dados
    Info.findByPk(1).then(function (informacao) {
        informacao.update({
            titulo: titulo,
            descricao: descricao,
            local: local,
            data_inicio: data_inicio,
            data_fim: data_fim
        }).then(function () {
            res.redirect('/admin'); // Redirecione de volta à página admin após a atualização
        });
    });
});

app.listen(8081, function () {
    console.log('Servidor Rodando na porta 8081');
});

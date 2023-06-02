const express = require('express');
const router = express.Router();
const path = require('path');
const Post = require('../models/Inscricao');
const Info = require('../models/informacoes');
const artigo = require('../models/artigos');

// Rota '/'
router.get('/', function (req, res) {
  Info.findByPk(1).then(function (informacao) {
    res.render('pages/index', { informacao: informacao });
  });
});

// Rota '/inscrever'
router.get('/inscrever', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/pages', 'inscricao.html'));
});

// Rota '/inscricoes'
router.post('/inscricoes', function (req, res) {
  Post.create({
    nome: req.body.nome,
    cracha: req.body.cracha,
    cpf: req.body.cpf,
    email: req.body.email,
    modalidade: req.body.modalidade
  })
    .then(function () {
      res.redirect('/');
    })
    .catch(function (erro) {
      res.send('Erro: Inscrição não realizada com sucesso!' + erro);
    });
});

// Rota '/artigos'
router.get('/artigos.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/pages', 'artigos.html'));
});

router.post('/artigosenviados', function (req, res) {

  artigo.create({
    titulo: req.body.titulo,
    resumo: req.body.resumo,
    palavras_chave: req.body.palavras_chave,
    autores: req.body.autores,
    afiliacao: req.body.afiliacao,
    categoria: req.body.categoria,
    arquivo: req.body.arquivo
  })
    .then(function () {
      res.redirect('/');
    })
    .catch(function (erro) {
      res.send('Erro: Artigo não cadastrado com sucesso!' + erro);
    });
});

// Rota '/admin'
router.get('/admin', function (req, res) {
  Info.findAll().then(function (informacoes) {
    res.render('pages/admin', { informacoes: informacoes });
  });
});

// Rota POST '/admin'
router.post('/admin', function (req, res) {
  // Obtenha os dados enviados pelo formulário
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  var local = req.body.local;
  var data_inicio = req.body.data_inicio;
  var data_fim = req.body.data_fim;

  // Atualize as informações no banco de dados
  Info.findByPk(1).then(function (informacao) {
    informacao
      .update({
        titulo: titulo,
        descricao: descricao,
        local: local,
        data_inicio: data_inicio,
        data_fim: data_fim
      })
      .then(function () {
        res.redirect('/admin'); // Redirecione de volta à página admin após a atualização
      });
  });
});

/* outras rotas */

// Rota '/programacao'
router.get('/programacao.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/pages', 'programacao.html'));
});

// Rota '/palestrantes'
router.get('/palestrantes.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/pages', 'palestrantes.html'));
});

// Rota '/inscricao'
router.get('/inscricao.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/pages', 'inscricao.html'));
});



// Rota '/noticias'
router.get('/noticias.html', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/pages', 'noticias.html'));
});



module.exports = router;

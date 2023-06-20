const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

// Configurações do Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Pasta onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo salvo
  }
});


// Importe as rotas
const routes = require('./routes/index');

// Configurações
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views')); // paginas ejs e html
app.use(express.static(path.join(__dirname, 'public'))); // css, js, imagens

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware para definir o tipo MIME correto para arquivos CSS
app.use('/css', function (req, res, next) {
  res.setHeader('Content-Type', 'text/css');
  next();
});

// Registre as rotas
app.use('/', routes);

// Inicie o servidor
app.listen(8081, function () {
  console.log('Servidor Rodando na porta 8081');
});

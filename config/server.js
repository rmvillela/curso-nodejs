var express = require('express'); // O require do express retorna uma função que não é executada por padrão. Para acionar basta adicionar um () no final da chamada, ficando require('express')();
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs'); // Altera uma propriedade do express
app.set('views', 'app/views'); // Aponta o caminho das views (é relativo ao local onde o módulo está sendo importado)

consign()
  .include('app/routes') //inclui as rotas da pasta routes, executando as funções automaticamente
  .then('config/dbConnection.js') //inclui apenas o arquivo dbConnection.js, executando as funções automaticamente
  .into(app);

module.exports = app;
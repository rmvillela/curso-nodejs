var express = require('express'); // O require do express retorna uma função que não é executada por padrão. Para acionar basta adicionar um () no final da chamada, ficando require('express')();
var app = express();

app.set('view engine', 'ejs'); // Altera uma propriedade do express

module.exports = app;
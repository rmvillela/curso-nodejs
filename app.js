var express = require('express'); // O require do express retorna uma função que não é executada por padrão. Para acionar basta adicionar um () no final da chamada, ficando require('express')();
var app = express();

app.set('view engine', 'ejs'); // Altera uma propriedade do express

app.get('/', function(req, res) {
  res.render('home/index');
});

app.get('/noticia', function(req, res) {
  res.render('noticias/noticia');
});

app.get('/noticias', function(req, res) {
  res.render('noticias/noticias');
});

app.get('/formulario', function(req, res) {
  res.render('admin/form_add_noticia');
});

app.listen(3000, function() {
  console.log('teste modafuka');
});

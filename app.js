var app = require('./config/server'); // Importa o módulo server

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

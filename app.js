var app = require('./config/server'); // Importa o módulo server

var rotaHome = require('./app/routes/home')(app); //Retorna a execução da função
var rotaNoticia = require('./app/routes/noticia')(app); //Retorna a execução da função
var rotaNoticias = require('./app/routes/noticias')(app); //Retorna a execução da função
var rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app); //Retorna a execução da função

app.listen(3000, function() {
  console.log('teste modafuka');
});

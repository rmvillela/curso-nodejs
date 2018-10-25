module.exports = function(app) {
	app.get('/noticia', function(req, res) {
		var connection = app.config.dbConnection(); // Recupera a função contida na variável exportada pelo módulo dbConnection, executando-a

		connection.query('select * from noticias where id_noticia = 1', function(error, result) {
			error ? res.send(error) : res.render('noticias/noticia', {noticia: result});
		});
	});
};
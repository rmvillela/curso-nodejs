module.exports = function(app) {
	app.get('/noticias', function(req, res) {
		var connection = app.config.dbConnection(); // Recupera a função contida na variável exportada pelo módulo dbConnection, executando-a

		connection.query('select * from noticias', function(error, result) {
			error ? res.send(error) : res.render('noticias/noticias', {noticias: result});
		});
	});
};
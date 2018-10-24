var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {
	var connection = dbConnection(); //Cria variável inicializando a função retornada pelo dbConnection

	app.get('/noticias', function(req, res) {
		connection.query('select * from noticias', function(error, result) {
			error ? res.send(error) : res.render('noticias/noticias', {noticias: result});
		});
	});
};
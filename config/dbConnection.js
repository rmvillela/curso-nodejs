var mysql = require('mysql');

var connMySQL = function() { //Criação de wrapper para evitar a criação do banco o tempo inteiro
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portal_noticias'
  });
};

module.exports = function() {
  return connMySQL; //Retorna a variável contendo a função sem executar
};
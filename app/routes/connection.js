var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'cblol2014',
    database : 'portal_noticias'
});

module.exports = connection;
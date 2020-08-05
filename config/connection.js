var mysql = require('mysql');

var conMySQL = function() {
    return connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'cblol2014',
        database : 'portal_noticias'
    });
};

module.exports = function() {
    return conMySQL;
};
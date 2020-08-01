var mysql = require('mysql');

module.exports = function () {
    return connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'cblol2014',
        database : 'portal_noticias'
    });
};

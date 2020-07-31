var connection = require('./connection');

module.exports = function(app) {
    connection.connect();

    app.get('/noticias', function(req, res) {
        connection.query('SELECT * FROM noticias;', function(error, result) {
            if (error) return console.log(error);
            res.send(result);
        });
    });
};
    
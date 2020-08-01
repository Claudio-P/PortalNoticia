var connection = require('../../Config/connection');

module.exports = function(app) {
    var con = connection();

    app.get('/noticias', function(req, res) {
        con.query('SELECT * FROM noticias;', function(error, result) {
            if (error) return console.log(error);
            res.render('noticias/noticias', {noticias : result});
        });
    });
};
    
module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        var con = app.config.connection();
        con.query('SELECT * FROM noticias;', function(error, result) {
            if (error) return console.log(error);
            res.render('noticias/noticias', {noticias : result});
        });
    });
};
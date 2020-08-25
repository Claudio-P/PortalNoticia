module.exports = function(app) {
    app.get('/noticias', function(req, res) {

        var con = app.config.connection();
        var noticiasModel = new app.app.models.NoticiasDAO(con);

        noticiasModel.getNoticias(function(error, result) {
            if (error) return console.log(error);
            res.render('noticias/noticias', {noticias : result});
        });
    });
};
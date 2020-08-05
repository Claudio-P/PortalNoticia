module.exports = function(app) {
    app.get('/noticias', function(req, res) {
        var con = app.config.connection();
        var noticiasModel = app.app.models.noticiasModels;

        noticiasModel.getNoticias(con, function(error, result) {
            if (error) return console.log(error);
            res.render('noticias/noticias', {noticias : result});
        });
    });
};
module.exports.noticias = function(app, req, res) {

    var con = app.config.connection();
        var noticiasModel = new app.app.models.NoticiasDAO(con);

        noticiasModel.getNoticias(function(error, result) {
            if (error) return console.log(error);
            res.render('noticias/noticias', { noticias : result });
        });
};

module.exports.noticia = function(app, req, res) {

    var con = app.config.connection();
        var noticiasModel = new app.app.models.NoticiasDAO(con);

        var id_noticia = req.query;

        noticiasModel.getNoticia(id_noticia, function(error, result) {
            if (error) return console.log(error);
            res.render('noticias/noticia', { noticia : result });
        });
}
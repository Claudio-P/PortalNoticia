module.exports = function(app) { 
    app.get('/noticia', function(req, res) {

        var con = app.config.connection();
        var noticiasModel = new app.app.models.NoticiasDAO(con);

        noticiasModel.getNoticia(function(error, result) {
            if (error) return console.log(error);
            res.render('noticias/noticia', {noticia : result});
        });
    });
};
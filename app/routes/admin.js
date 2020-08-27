module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function(req, res) {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(req, res) {
        var noticias = req.body;

        

        var con = app.config.connection();
        var noticiasModel = new app.app.models.NoticiasDAO(con);

        noticiasModel.salvarNoticia(noticias, function(error, result) {
            if (error) return console.log(error);
            res.redirect('/noticias');
        });
    });
};
module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function(req, res) {
        res.render('admin/form_add_noticia', { validator : {}, noticias: {} });
    });

    app.post('/noticias/salvar', function(req, res) {
        var noticias = req.body;
        
        req.assert('titulo', 'Título é obrigatório.').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório.').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres.').len(10, 100);
        req.assert('autor', 'Nome do autor é obrigatório.').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória.').notEmpty().isDate({ format : 'YYYY-MM-DD' });
        req.assert('noticia', 'Notícia é obrigatória.').notEmpty();

        var error = req.validationErrors();

        if (error) {
            res.render('admin/form_add_noticia', { validator : error, noticias : noticias });
            return;
        }

        var con = app.config.connection();
        var noticiasModel = new app.app.models.NoticiasDAO(con);

        noticiasModel.salvarNoticia(noticias, function(error, result) {
            if (error) return console.log(error);
            res.redirect('/noticias');
        });
    });
};
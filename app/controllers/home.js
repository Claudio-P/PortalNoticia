module.exports.index = function(app, req, res) {

    var connection = app.config.connection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.get5LastNews(function(error, result){
        res.render('home/index', { noticias : result });
    });

};
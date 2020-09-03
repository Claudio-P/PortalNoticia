function NoticiasDAO(con){
    this._con = con;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._con.query('SELECT * FROM noticias ORDER BY data_criacao DESC;', callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback) {
    console.log(id_noticia.id_noticia);
    this._con.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticias, callback) {
    console.log(noticias);
    this._con.query('INSERT INTO noticias set ?', noticias, callback);
};

NoticiasDAO.prototype.get5LastNews = function(callback) {
    this._con.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5;', callback);
};

module.exports = function() {
    return NoticiasDAO;
};
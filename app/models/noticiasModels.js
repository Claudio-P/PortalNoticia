module.exports = function() {

    this.getNoticias = function(con, callback) {
        con.query('SELECT * FROM noticias;', callback);
    };

    this.getNoticia = function(con, callback) {
        con.query('SELECT * FROM noticias WHERE id_noticia = 1;', callback);
    };
    
    return this;
};
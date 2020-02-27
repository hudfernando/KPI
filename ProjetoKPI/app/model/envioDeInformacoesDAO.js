function envioDeInformacoesDAO(connection) {
    this._connection = connection;
}

envioDeInformacoesDAO.prototype.retorneAsInformacoesDoDia = function () {
    let sqlView = 'SELECT * FROM RETORNE_AS_INFORMACOES_DO_DIA';
    var retorno = this._connection.query(sqlView);
    return retorno;

}


module.exports = function () {
    return envioDeInformacoesDAO;
}
function transportadoraDAO(connection) {
    this._connection = connection;
}

transportadoraDAO.prototype.transportadora_salvar = function (transportadora) {
    var sql = insert();
    var valores = '';

    valores = retorneOsValoresFormatadosParaOSQL(transportadora);
    sql += valores;
    this._connection.query(sql);

}

function insert() {
    return 'INSERT INTO TRANSPORTADORA (TRANSPOTADORA_NOME, TRANSPORTADORA_TELEFONE, TRANSPORTADORA_RESP_AGEND, TRANSPORTADORA_EMAIL)';
}
function retorneOsValoresFormatadosParaOSQL(transportadora) {
    var valores = 'VALUES (';
    valores += "'" +transportadora.TRANSPOTADORA_NOME + "'"+ ',';
    valores += "'" +transportadora.TRANSPORTADORA_TELEFONE + "'"+ ',';
    valores += "'" +transportadora.TRANSPORTADORA_RESP_AGEND + "'"+ ',';
    valores += "'" +transportadora.TRANSPORTADORA_EMAIL+ "'" + ')';
    return valores;
}

transportadoraDAO.prototype.transportadora_recuperar_informacoes = function () {
    var sql = 'SELECT TRANSPORTADORA_NOME, TRANSPORTADORA_TELEFONE, TRANSPORTADORA_RESP_AGEND, TRANSPORTADORA_EMAIL FROM TRANSPORTADORA ORDER BY TRANSPORTADORA_NOME ASC';
    var retorno = this._connection.query(sql);    
    return retorno;
}

module.exports = function () {
    return transportadoraDAO;
}
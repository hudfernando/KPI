function infoMercadoriaDAO(connection) {
    this._connection = connection;
}

infoMercadoriaDAO.prototype.infoMercadoria_salvar = function (infoMercadoria) {
    var quantidade = infoMercadoria[0];

    for(let i = 0; i < quantidade; i++){

    }
    var sql = insert();
    var valores = '';

    valores = retorneOsValoresFormatadosParaOSQL(infoMercadoria);
    sql += valores;
    this._connection.query(sql);

}


function insert() {
    return 'INSERT INTO INFORMACOES_MERCADORIA (infoMercadoria_CODIGO, infoMercadoria_NOME)';
}
function retorneOsValoresFormatadosParaOSQL(infoMercadoria) {
    
    var valores = 'VALUES (';
    valores += infoMercadoria.infoMercadoria_CODIGO + ',';
    valores += "'" +infoMercadoria.infoMercadoria_NOME+ "'" + ')';
    return valores;
}

infoMercadoriaDAO.prototype.infoMercadoria_recuperar_informacoes = function () {
    var select = 'SELECT infoMercadoria_CODIGO, infoMercadoria_NOME FROM infoMercadoria ORDER BY infoMercadoria_NOME ASC';
    var retorno = this._connection.query(select);
    return retorno;

}

// infoMercadoriaDAO.prototype.consultar = function () {
//     var select = 'SELECT TOTAL_DE_PRODUTOS_ZERADOS, NIVEL_DE_RUPTURAS, PERDAS_DO_MES, DATA_INSERCAO FROM ESTOQUE';
//     var retorno = this._connection.query(select);
//     return retorno;

// }

module.exports = function () {
    return infoMercadoriaDAO;
}
function fornecedorDAO(connection) {
    this._connection = connection;
}

fornecedorDAO.prototype.fornecedor_salvar = function (fornecedor) {
    var sql = insert();
    var valores = '';

    valores = retorneOsValoresFormatadosParaOSQL(fornecedor);
    sql += valores;
    this._connection.query(sql);

}

function insert() {
    return 'INSERT INTO FORNECEDOR (FORNECEDOR_CODIGO, FORNECEDOR_NOME)';
}
function retorneOsValoresFormatadosParaOSQL(fornecedor) {
    
    var valores = 'VALUES (';
    valores += fornecedor.FORNECEDOR_CODIGO + ',';
    valores += "'" +fornecedor.FORNECEDOR_NOME+ "'" + ')';
    return valores;
}

fornecedorDAO.prototype.fornecedor_recuperar_informacoes = function () {
    var select = 'SELECT FORNECEDOR_CODIGO, FORNECEDOR_NOME FROM FORNECEDOR ORDER BY FORNECEDOR_NOME ASC';
    var retorno = this._connection.query(select);
    return retorno;

}

// fornecedorDAO.prototype.consultar = function () {
//     var select = 'SELECT TOTAL_DE_PRODUTOS_ZERADOS, NIVEL_DE_RUPTURAS, PERDAS_DO_MES, DATA_INSERCAO FROM ESTOQUE';
//     var retorno = this._connection.query(select);
//     return retorno;

// }

module.exports = function () {
    return fornecedorDAO;
}
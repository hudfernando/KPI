var moment = require('moment');
function estoqueDAO(connection) {
    this._connection = connection;
}

estoqueDAO.prototype.estoque_salvar = function (estoque) {
    var sql = insert();
    var valores = '';

    valores = retorneOsValoresFormatadosParaOSQL(estoque);
    sql += valores;
    this._connection.query(sql);

}

function insert() {
    return 'INSERT INTO ESTOQUE (TOTAL_DE_PRODUTOS_ZERADOS, PERDAS_DO_MES, DATA_INSERCAO)';
}
function retorneOsValoresFormatadosParaOSQL(estoque) {
    const agora = moment();
    var anoMesDia = agora.format('YYYY-MM-DD');

    var valorSemOPonto = estoque.PERDAS_DO_MES.split('.');
    var partesDoValor;
    if (valorSemOPonto.length == 2) {
        var partesDoValor = valorSemOPonto[0] += valorSemOPonto[1];
    }
    if (valorSemOPonto.length == 3) {
        var partesDoValor = valorSemOPonto[0] += valorSemOPonto[1] += valorSemOPonto[2];
    }

    var valorFormatadoParaOBanco = partesDoValor.replace(',', '.');

    var valores = 'VALUES (';
    valores += estoque.TOTAL_DE_PRODUTOS_ZERADOS + ',';
    valores += valorFormatadoParaOBanco + ',';
    valores += "'" + anoMesDia + "'" + ')';
    return valores;
}

estoqueDAO.prototype.recuperar = function (data) {
    var select = 'SELECT TOTAL_DE_PRODUTOS_ZERADOS, NIVEL_DE_RUPTURAS, PERDAS_DO_MES FROM ESTOQUE WHERE DATA_INSERCAO =';
    var anoMesDia = "'" + data + "'";
    var sql = select += anoMesDia
    var retorno = this._connection.query(sql);
    return retorno;

}

estoqueDAO.prototype.consultar = function () {
    const now = moment();
    var mesAtual = now.format('MM');
    var select = 'SELECT TOTAL_DE_PRODUTOS_ZERADOS, NIVEL_DE_RUPTURAS, PERDAS_DO_MES, DATA_INSERCAO FROM ESTOQUE WHERE MONTH(DATA_INSERCAO) =' + mesAtual;
    var retorno = this._connection.query(select);
    return retorno;

}

estoqueDAO.prototype.salvar_nivel_de_ruptura = function (nivelDeRuptura, data) {
    var idEstoque;
    var sql = 'SELECT ID_ESTOQUE FROM ESTOQUE WHERE DATA_INSERCAO =';
    var anoMes = "'" + data + "'";
    sql += anoMes;
    try {
        idEstoque = this._connection.query(sql);
    } catch{
        return 0;
    }

    if (idEstoque == null || idEstoque.length == 0)
        return 0;

    var select = 'UPDATE ESTOQUE SET NIVEL_DE_RUPTURAS = ';
    select += nivelDeRuptura;
    select += ' WHERE DATA_INSERCAO =';
    var anoMesDia = "'" + data + "'";
    var sqlUpdate = select += anoMesDia
    this._connection.query(sqlUpdate);
    return 1;
}

module.exports = function () {
    return estoqueDAO;
}
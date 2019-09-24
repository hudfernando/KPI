var moment = require('moment');
function expedicaoDAO(connection) {
    this._connection = connection;
}
expedicaoDAO.prototype.expedicao_salvar = function (expedicao) {
    var sql = insert();
    var valores =''; 
    
    valores = retorneOsValoresFormatadosParaOSQL(expedicao);
    sql += valores;

    this._connection.query(sql);
}

function insert(){
    return 'INSERT INTO EXPEDICAO (TOTAL_DE_VOLUMES_EXPEDIDOS, VALOR_TOTAL_DA_VENDA, FINAL_EXPEDICAO, DATA_INSERCAO)'; 
}
function retorneOsValoresFormatadosParaOSQL(expedicao){
    const agora = moment();
    var anoMesDia = agora.format('YYYY-MM-DD');
    var horaEMinuto = new moment().format("HH:mm:ss");

    var valorSemOPonto = expedicao.VALOR_TOTAL_DA_VENDA.split('.');
    var partesDoValor;
    if (valorSemOPonto.length == 2) {
        var partesDoValor = valorSemOPonto[0] += valorSemOPonto[1];
    }
    if (valorSemOPonto.length == 3) {
        var partesDoValor = valorSemOPonto[0] += valorSemOPonto[1] += valorSemOPonto[2];
    }

    var valorFormatadoParaOBanco = partesDoValor.replace(',', '.');

    var valores = 'VALUES (';
    valores += expedicao.TOTAL_DE_VOLUMES_EXPEDIDOS + ',';
    valores += valorFormatadoParaOBanco  + ',';
    valores += "'" + horaEMinuto + "'" + ',';
    valores += "'" + anoMesDia + "'" + ')';
    return valores;
}

expedicaoDAO.prototype.recuperar = function (data) {
    var select = 'SELECT TOTAL_DE_VOLUMES_EXPEDIDOS, VALOR_TOTAL_DA_VENDA, FINAL_EXPEDICAO, DATA_INSERCAO FROM EXPEDICAO WHERE DATA_INSERCAO =';
    var anoMesDia = "'" + data + "'";
    var sql = select += anoMesDia
    var retorno = this._connection.query(sql);
    return retorno;

}

module.exports = function () {
    return expedicaoDAO;
}
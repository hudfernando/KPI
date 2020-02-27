var moment = require('moment');
let fs = require('fs');
function rmsDAO(connection) {
    this._connection = connection;
}

rmsDAO.prototype.rms_salvar = function (rms) { 
    const agora = moment().subtract(1, "hours");
    var anoMesDia = agora.format('YYYY-MM-DD');
    var sql = insert();
    var valores = '';

    valores = retorneOsValoresFormatadosParaOSQL(rms);
    sql += valores;

    this._connection.query(sql);
    fs.writeFile('C:/WorkHudson/KPI/ProjetoKPI/app/areas/rms_' + anoMesDia.toString() + '.txt', 'rms', { enconding: 'utf-8', flag: 'a' }, function (err) {
        if (err) throw err;
        console.log('Arquivo salvo!');
    });
}
rmsDAO.prototype.recuperar = function (data) {
    var select = 'SELECT VALOR_RECEBIDO ,NOTAS_EFETIVADAS, RESSARCIMENTO_INDUSTRIA FROM RMS WHERE DATA_INSERCAO =';
    var anoMesDia = "'" + data + "'";
    var sql = select += anoMesDia
    var retorno = this._connection.query(sql);
    return retorno;
}


function insert() {
    return 'INSERT INTO RMS (VALOR_RECEBIDO, NOTAS_EFETIVADAS, RESSARCIMENTO_INDUSTRIA, DATA_INSERCAO)';
}
function retorneOsValoresFormatadosParaOSQL(rms) {
    var valorSemOPonto = rms.VALOR_RECEBIDO.split('.');
    var partesDoValor;
    if (valorSemOPonto.length == 2) {
        var partesDoValor = valorSemOPonto[0] += valorSemOPonto[1];
    }
    if (valorSemOPonto.length == 3) {
        var partesDoValor = valorSemOPonto[0] += valorSemOPonto[1] += valorSemOPonto[2];
    }
    var valorFormatadoParaOBanco = partesDoValor.replace(',', '.');

    valorSemOPonto = rms.RESSARCIMENTO_INDUSTRIA.split('.');
    if (valorSemOPonto.length == 2) {
        var partesDoValor = valorSemOPonto[0] += valorSemOPonto[1];
    }
    if (valorSemOPonto.length == 3) {
        var partesDoValor = valorSemOPonto[0] += valorSemOPonto[1] += valorSemOPonto[2];
    }
    var valorFormatadoRessarcimentoIndustria = partesDoValor.replace(',', '.');


    const agora = moment();
    var anoMesDia = agora.format('YYYY-MM-DD');

    var valores = 'VALUES (';
    valores += valorFormatadoParaOBanco + ',';
    valores += rms.NOTAS_EFETIVADAS + ',';
    valores += valorFormatadoRessarcimentoIndustria + ',';
    valores += "'" + anoMesDia + "'" + ')';
    return valores;
}

module.exports = function () {
    return rmsDAO;
}
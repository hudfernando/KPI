var moment = require('moment');
function agendamento_mercadoriaDAO(connection) {
    this._connection = connection;
}

agendamento_mercadoriaDAO.prototype.agendamento_mercadoria_salvar = function (agendamento_mercadoria, codTrans) {
    let sql = '';

    sql = retorneOsValoresFormatadosParaOSQL(agendamento_mercadoria, codTrans);
    this._connection.query(sql);
}

function retorneOsValoresFormatadosParaOSQL(agendamento_mercadoria, codTrans) {
    let agora = new moment();
    let inicio = moment().day(0); // domingo desta semana
    let fim = moment().day(6); // sábado desta semana
    let formato = 'DD/MM/YYYY';
    var valores;
    if (agendamento_mercadoria.OBSERVACAO != null) {
        valores = 'INSERT INTO AGENDAMENTO (ID_TRANSPORTADORA, OBSERVACAO)';
        valores += 'VALUES (';
        valores += agora.format('YYYY-MM-DD') + ',';
        valores += codTrans + ',';
        valores += "'" + agendamento_mercadoria.OBSERVACAO + "'" + ')';
    }
    else {
        valores = 'INSERT INTO AGENDAMENTO (ID_TRANSPORTADORA)';
        valores += 'VALUES (';
       // valores += agora.format('YYYY-MM-DD') + ',';
        valores += codTrans + ')';
    }
    return valores;
}
agendamento_mercadoriaDAO.prototype.retorneoCodigoDaTransportadora = function (agendamento_mercadoria) {
    let sql = 'SELECT ID_TRANSPORTADORA FROM TRANSPORTADORA WHERE TRANSPORTADORA_NOME = ' + "'" + agendamento_mercadoria.TRANSPORTADORA  + "'";
    let codigoTransportadora = this._connection.query(sql);
    return codigoTransportadora[0].ID_TRANSPORTADORA;
}

agendamento_mercadoriaDAO.prototype.insiraHorarioAgendamento = function (agendamento_mercadoria, idAgendamento) {

    let sql = 'INSERT INTO HORARIO_AGENDAMENTO(DIA_AGENDAMENTO, HORARIO_INICIO, HORARIO_FIM, ID_AGENDAMENTO)';
    let valores = 'VALUES (';
    valores += "'" + agendamento_mercadoria.DIA + "'" + ',';
    valores += "'" + agendamento_mercadoria.HORARIO_COMECO + "'" + ',';
    valores += "'" + agendamento_mercadoria.HORARIO_FIM + "'" + ',';
    valores +=  idAgendamento + ')';
    sql += valores;
    this._connection.query(sql);
}

agendamento_mercadoriaDAO.prototype.insiraInformacoesMercadoria = function (agendamento_mercadoria, idFornecedor, idAgendamento) {
    let sql = 'INSERT INTO INFORMACOES_MERCADORIA(NOTAS_FISCAIS, PEDIDO_GOYAZ, VOLUMES, FK_ID_FORNECEDOR, FK_ID_AGENDAMENTO)';
    let valores = 'VALUES (';
    valores += agendamento_mercadoria.NOTAS_FISCAIS + ',';
    valores += agendamento_mercadoria.PEDIDO_GOYAZ + ',';
    valores += agendamento_mercadoria.VOLUMES + ',';
    valores += idFornecedor + ',';
    valores += idAgendamento + ')';

    sql += valores;
    this._connection.query(sql);
}

agendamento_mercadoriaDAO.prototype.retorneoCodigoDoFornecedor = function (agendamento_mercadoria) {
    let sql = 'SELECT ID_FORNECEDOR FROM FORNECEDOR WHERE FORNECEDOR_NOME =' + "'" + agendamento_mercadoria.FORNECEDOR  + "'";
    let codigoFornecedor = this._connection.query(sql);
    return codigoFornecedor[0].ID_FORNECEDOR;
}

agendamento_mercadoriaDAO.prototype.retorneoOUltimoAgendamentoSalvo = function () {
    let idAgendamento = this._connection.query('SELECT MAX(ID_AGENDAMENTO) AS ID_AGENDAMENTO FROM AGENDAMENTO');
    return idAgendamento[0].ID_AGENDAMENTO;
}


module.exports = function () {
    return agendamento_mercadoriaDAO;
}
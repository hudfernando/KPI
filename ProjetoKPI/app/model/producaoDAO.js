var moment = require('moment');
let fs = require('fs');

function producaoDAO(connection) {
    this._connection = connection;
}

producaoDAO.prototype.producao_salvar = function (producao) {
    const agora = moment().subtract(1, "hours");
    var anoMesDia = agora.format('YYYY-MM-DD');
    var sql = insert();
    var valores =''; 
    
    valores = retorneOsValoresFormatadosParaOSQL(producao);
    sql += valores;
    this._connection.query(sql);

    fs.writeFile('C:/WorkHudson/KPI/ProjetoKPI/app/areas/producao_'  + anoMesDia.toString() + '.txt', 'producao', { enconding: 'utf-8', flag: 'a' }, function (err) {
        if (err) throw err;
        console.log('Arquivo salvo!');
    });
}

function insert(){
    return 'INSERT INTO PRODUCAO (TOTAL_DE_PEDIDOS, TOTAL_DE_LINHAS, MEDIA_LINHAS_POR_PEDIDO, TOTAL_DE_UNIDADES, FINAL_PRODUCAO, DATA_INSERCAO)'; 
}
function retorneOsValoresFormatadosParaOSQL(producao){
    const agora = moment();
    var anoMesDia = agora.format('YYYY-MM-DD');
    var horaEMinuto = agora.format("HH:mm:ss");
    var valores = 'VALUES (';
    valores += producao.TOTAL_DE_PEDIDOS + ',';
    valores += producao.TOTAL_DE_LINHAS  + ',';
    valores += producao.MEDIA_LINHAS_POR_PEDIDO  + ',';
    valores += producao.TOTAL_DE_UNIDADES    + ',';
    valores += "'" + horaEMinuto + "'" + ',';
    valores += "'" + anoMesDia + "'" + ')';
    return valores;
}

producaoDAO.prototype.consultar = function () {
    var select = 'SELECT TOTAL_DE_PEDIDOS, TOTAL_DE_LINHAS, MEDIA_LINHAS_POR_PEDIDO, TOTAL_DE_UNIDADES, FINAL_PRODUCAO, DATA_INSERCAO FROM PRODUCAO';
    var retorno = this._connection.query(select);
    return retorno;

}

producaoDAO.prototype.recuperar = function (data) {
    var select = 'SELECT TOTAL_DE_PEDIDOS, TOTAL_DE_LINHAS, MEDIA_LINHAS_POR_PEDIDO, TOTAL_DE_UNIDADES, FINAL_PRODUCAO FROM PRODUCAO WHERE DATA_INSERCAO =';
    var anoMesDia = "'" + data + "'";
    var sql = select += anoMesDia
     var retorno = this._connection.query(sql);
     return retorno;

}
module.exports = function () {
    return producaoDAO;
}





















var moment = require('moment');
let fs = require('fs');
function informacoesMensaisDAO(connection) {
    this._connection = connection;
}



informacoesMensaisDAO.prototype.informacoes_mensais_salvar = function (informacoesMensais) {
    const agora = moment();
    let anoMes = agora.format('YYYY-MM');

    var sql = insert();
    var valores =''; 
    
    valores = retorneOsValoresFormatadosParaOSQL(informacoesMensais);
    sql += valores;
    try{
        this._connection.query(sql);
        fs.writeFile('C:/WorkHudson/KPI/ProjetoKPI/app/areas/informacoesMensais_'  + anoMes.toString() + '.txt', 'informacoesMensais' , { enconding: 'utf-8', flag: 'a' }, function (err) {
            if (err) throw err;
            console.log('Arquivo salvo!');
        });
    }catch{
        return;
    }
    
}

function insert(){
    return 'INSERT INTO INFORMACOES_MENSAIS (ESTOQUE_TOTAL_PRODUTOS_ATIVOS, DATA_INSERCAO)';
}
function retorneOsValoresFormatadosParaOSQL(informacoesMensais){
    const agora = moment();
    var anoMesDia = agora.format('YYYY-MM');

    var valores = 'VALUES (';
    valores += informacoesMensais.ESTOQUE_TOTAL_PRODUTOS_ATIVOS + ',';
    valores += "'" + anoMesDia + "'" + ')';
    return valores;
}

informacoesMensaisDAO.prototype.recuperar = function () {
    const agora = moment();
    var data = agora.format('YYYY-MM');

    var select = 'SELECT ESTOQUE_TOTAL_PRODUTOS_ATIVOS FROM INFORMACOES_MENSAIS WHERE DATA_INSERCAO =';
    var anoMesDia = "'" + data + "'";
    var sql = select += anoMesDia
     var retorno = this._connection.query(sql);
     return retorno;

}

module.exports = function () {
    return informacoesMensaisDAO;
}
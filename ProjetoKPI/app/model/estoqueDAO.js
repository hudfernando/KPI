let moment = require('moment');
let fs = require('fs');
function estoqueDAO(connection) {
    this._connection = connection;
}

estoqueDAO.prototype.estoque_salvar = function (estoque) {
    const agora = moment().subtract(1, "hours");
    var anoMesDia = agora.format('YYYY-MM-DD');

    let produtosAtivos = this._connection.query('select ESTOQUE_TOTAL_PRODUTOS_ATIVOS from informacoes_mensais order by ESTOQUE_TOTAL_PRODUTOS_ATIVOS asc limit 1');
    let sql = insert();
    let valores = '';

    valores = retorneOsValoresFormatadosParaOSQL(estoque, produtosAtivos);
    sql += valores;
    this._connection.query(sql);
    fs.writeFile('C:/WorkHudson/KPI/ProjetoKPI/app/areas/estoque_'  + anoMesDia.toString() + '.txt', 'estoque', { enconding: 'utf-8', flag: 'a' }, function (err) {
        if (err) throw err;
        console.log('Arquivo salvo!');
    });

}

function insert() {
    return 'INSERT INTO ESTOQUE (TOTAL_DE_PRODUTOS_ZERADOS, NIVEL_DE_RUPTURAS, PERDAS_DO_MES, PERDAS_DO_MES_1, PERDAS_DO_MES_2, DATA_INSERCAO)';
}
function retorneOsValoresFormatadosParaOSQL(estoque, produtosAtivos) {
    const agora = moment();
    let anoMesDia = agora.format('YYYY-MM-DD');
    let perdasDoMes   = formateOValorParaSalvarNoBAnco(estoque.PERDAS_DO_MES);  
    let perdasDoMes_1 = formateOValorParaSalvarNoBAnco(estoque.PERDAS_DO_MES_1);   
    let perdasDoMes_2 = formateOValorParaSalvarNoBAnco(estoque.PERDAS_DO_MES_2);  


    let valores = 'VALUES (';
    valores += estoque.TOTAL_DE_PRODUTOS_ZERADOS + ',';
    valores += calculeONiveldeRuptura(estoque, produtosAtivos) + ',';
    valores += perdasDoMes + ',';
    valores += perdasDoMes_1 + ',';
    valores += perdasDoMes_2 + ',';
    valores += "'" + anoMesDia + "'" + ')';
    return valores;
}

function formateOValorParaSalvarNoBAnco(perdas){
    let valorSemOPonto = perdas.split('.');
    var partesDoValor;
    if (valorSemOPonto.length == 2) {
        partesDoValor = valorSemOPonto[0] += valorSemOPonto[1];
    }
    if (valorSemOPonto.length == 3) {
        partesDoValor = valorSemOPonto[0] += valorSemOPonto[1] += valorSemOPonto[2];
    }
    return partesDoValor.replace(',', '.');
}

estoqueDAO.prototype.recuperar = function (data) {
    let select = 'SELECT TOTAL_DE_PRODUTOS_ZERADOS, NIVEL_DE_RUPTURAS, PERDAS_DO_MES, PERDAS_DO_MES_1, PERDAS_DO_MES_2, FROM ESTOQUE WHERE DATA_INSERCAO =';
    let anoMesDia = "'" + data + "'";
    let sql = select += anoMesDia
    let retorno = this._connection.query(sql);
    return retorno;

}

estoqueDAO.prototype.consultar = function () {
    const now = moment();
    let mesAtual = now.format('MM');
    let select = 'SELECT TOTAL_DE_PRODUTOS_ZERADOS, NIVEL_DE_RUPTURAS, PERDAS_DO_MES, PERDAS_DO_MES_1, PERDAS_DO_MES_2, DATA_INSERCAO FROM ESTOQUE WHERE MONTH(DATA_INSERCAO) =' + mesAtual;
    let retorno = this._connection.query(select);
    console.log(retorno);
    return retorno;

}

function calculeONiveldeRuptura(estoque, produtosAtivos){
    let produtosZerados = estoque.TOTAL_DE_PRODUTOS_ZERADOS;
    let produtosZeradosVezesCem = produtosZerados * 100;
    let totaldeRuptura = produtosZeradosVezesCem / produtosAtivos[0].ESTOQUE_TOTAL_PRODUTOS_ATIVOS;
    return totaldeRuptura.toFixed(2);
}
module.exports = function () {
    return estoqueDAO;
}
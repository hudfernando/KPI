let moment = require('moment');
let fs = require('fs');
module.exports.index = function (application, req, res) {

    let informacoesMensais;
    let producao;
    let estoque;
    let rms;
    let expedicao;
    const now = moment().subtract(1, "hours");
    let anoMesDia = now.format('YYYY-MM-DD');
    let anoMes = now.format('YYYY-MM');
    
    
    try{
        informacoesMensais = fs.readFileSync('C:/WorkHudson/KPI/ProjetoKPI/app/areas/informacoesMensais_' + anoMes.toString()  +'.txt', 'utf8');
    }
    catch{

    }
    try {
        producao = fs.readFileSync('C:/WorkHudson/KPI/ProjetoKPI/app/areas/producao_' + anoMesDia.toString()  +'.txt', 'utf8');
    } catch (error) {
        
    }
    try {
        estoque = fs.readFileSync('C:/WorkHudson/KPI/ProjetoKPI/app/areas/estoque_' + anoMesDia.toString()  +'.txt', 'utf8');
    } catch (error) {
        
    }
    try {
        rms = fs.readFileSync('C:/WorkHudson/KPI/ProjetoKPI/app/areas/rms_' + anoMesDia.toString()  + '.txt', 'utf8');
    } catch (error) {
        
    }
    try {
        expedicao = fs.readFileSync('C:/WorkHudson/KPI/ProjetoKPI/app/areas/expedicao_' + anoMesDia.toString() +'.txt', 'utf8');
    } catch (error) {
        
    }
    //let connection = application.config.dbConnection();


    let areasJaInseridasInformacoes = [];

    //let informacoesMensaisModel = new application.app.model.informacoesMensaisDAO(connection);
    //let informacoesMensais = informacoesMensaisModel.recuperar();
    if (informacoesMensais != null && informacoesMensais !== undefined) {
        areasJaInseridasInformacoes.push(0);
    }

    //let producaoModel = new application.app.model.producaoDAO(connection);
    //let producao = producaoModel.recuperar(data);
    if (producao != null && producao !== undefined) {
        areasJaInseridasInformacoes.push(1);
    }

    //let estoqueModel = new application.app.model.estoqueDAO(connection);
    //let estoque = estoqueModel.recuperar(data);
    if (estoque != null && estoque !== undefined) {
        areasJaInseridasInformacoes.push(2);
    }

    //let rmsModel = new application.app.model.rmsDAO(connection);
    //let rms = rmsModel.recuperar(data);
    if (rms != null && rms !== undefined) {
        areasJaInseridasInformacoes.push(3);
    }

    //let expedicaoModel = new application.app.model.expedicaoDAO(connection);
    //let expedicao = expedicaoModel.recuperar(data);
    if (expedicao != null && expedicao !== undefined) {
        areasJaInseridasInformacoes.push(4);
    }

    res.render("home", { areas: areasJaInseridasInformacoes });

}

var moment = require('moment');
module.exports.index = function (application, req, res) {

    var connection = application.config.dbConnection();
    var estoqueModel = new application.app.model.estoqueDAO(connection);
    var expedicaoModel = new application.app.model.expedicaoDAO(connection);
    var producaoModel = new application.app.model.producaoDAO(connection);
    var rmsModel = new application.app.model.rmsDAO(connection);
    var informacoesMensaisModel = new application.app.model.informacoesMensaisDAO(connection);

    const now = moment();
    var data = now.format('YYYY-MM-DD');

    var areasJaInseridasInformacoes = [];

    var informacoesMensais = informacoesMensaisModel.recuperar();
    if (informacoesMensais.length > 0){
        areasJaInseridasInformacoes.push(0);
    }

    var producao = producaoModel.recuperar(data);
    if (producao.length > 0){
        areasJaInseridasInformacoes.push(1);
    }

    var estoque = estoqueModel.recuperar(data);
    if (estoque.length > 0){
        areasJaInseridasInformacoes.push(2);
    }
    
    var rms = rmsModel.recuperar(data);
    if (rms.length > 0){
        areasJaInseridasInformacoes.push(3);
    }
    
    var expedicao = expedicaoModel.recuperar(data);
    if (expedicao.length > 0){
        areasJaInseridasInformacoes.push(4); 
    }

    res.render("home", {areas : areasJaInseridasInformacoes});
    
}
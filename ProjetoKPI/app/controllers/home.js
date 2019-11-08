var moment = require('moment');
module.exports.index = function (application, req, res) {

console.log('1');
    var connection = application.config.dbConnection();
    
    
    
    
    

    const now = moment();
    var data = now.format('YYYY-MM-DD');

    var areasJaInseridasInformacoes = [];
    console.log('2');
    
    var informacoesMensaisModel = new application.app.model.informacoesMensaisDAO(connection);
    var informacoesMensais = informacoesMensaisModel.recuperar();
    console.log('3');
    if (informacoesMensais.length > 0){
        areasJaInseridasInformacoes.push(0);
    }

    var producaoModel = new application.app.model.producaoDAO(connection);
    var producao = producaoModel.recuperar(data);
    console.log('4');
    if (producao.length > 0){
        areasJaInseridasInformacoes.push(1);
    }

    var estoqueModel = new application.app.model.estoqueDAO(connection);
    var estoque = estoqueModel.recuperar(data);
    console.log('5');
    if (estoque.length > 0){
        areasJaInseridasInformacoes.push(2);
    }
    
    var rmsModel = new application.app.model.rmsDAO(connection);
    var rms = rmsModel.recuperar(data);
    console.log('6');
    if (rms.length > 0){
        areasJaInseridasInformacoes.push(3);
    }
    
    var expedicaoModel = new application.app.model.expedicaoDAO(connection);
    var expedicao = expedicaoModel.recuperar(data);
    console.log('7');
    if (expedicao.length > 0){
        areasJaInseridasInformacoes.push(4); 
    }

    console.log('8');
    res.render("home", {areas : areasJaInseridasInformacoes});
    
}

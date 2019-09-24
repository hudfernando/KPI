var moment = require('moment');

module.exports.expedicao_salvar = function (application, req, res) {

    var expedicao = req.body;
    var connection = application.config.dbConnection();
    var expedicaoModel = new application.app.model.expedicaoDAO(connection);

    expedicaoModel.expedicao_salvar(expedicao);
    
    monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    const agora = moment();

    var cabecalho = 'Informações do dia: ' + agora.date() + ' de ' + monName[agora.month()] + '\n';
    cabecalho += 'Área: EXPEDIÇÃO\n';
    var totalVolExpedido = expedicao.TOTAL_DE_VOLUMES_EXPEDIDOS;
    var totalNotasEmitidas = expedicao.TOTAL_DE_NOTAS_EMITIDAS;
    var valorTotalVenda = expedicao.VALOR_TOTAL_DA_VENDA;

    var msg = '';
    msg = cabecalho;
    msg += 'Tot Vol Expedidos => ' + totalVolExpedido + '\n';
    msg += 'Tot Notas Faturadas => ' + totalNotasEmitidas + '\n';
    msg += 'Val da Venda => '+ 'R$ ' + valorTotalVenda + '\n';


    // var bot = application.config.telegramBot();
    // var botGerencia = new application.app.telegram.botGerencia(bot);
    // botGerencia.enviarMensagem(msg);

    res.redirect('/');


}
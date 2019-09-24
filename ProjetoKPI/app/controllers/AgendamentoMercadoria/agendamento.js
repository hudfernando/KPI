
module.exports.agendar = function (application, req, res) {

    let agendamento_mercadoria = req.body;
    console.log(agendamento_mercadoria);

    let connection = application.config.dbConnection();
    let agendamento_mercadoriaModel = new application.app.model.AgendamentoMercadoria.agendamento_mercadoriaDAO(connection);
    let codigoTransportadora = agendamento_mercadoriaModel.retorneoCodigoDaTransportadora(agendamento_mercadoria);
    console.log(codigoTransportadora)
    agendamento_mercadoriaModel.agendamento_mercadoria_salvar(agendamento_mercadoria, codigoTransportadora);
    let idAgendamento = agendamento_mercadoriaModel.retorneoOUltimoAgendamentoSalvo()
    agendamento_mercadoriaModel.insiraHorarioAgendamento(agendamento_mercadoria, idAgendamento);

    let idFornecedor = agendamento_mercadoriaModel.retorneoCodigoDoFornecedor(agendamento_mercadoria)
    agendamento_mercadoriaModel.insiraInformacoesMercadoria(agendamento_mercadoria, idFornecedor, idAgendamento)

}
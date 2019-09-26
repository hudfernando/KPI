module.exports.agendar = function (application, req, res) {

    let agendamento_mercadoria = req.body;

    let connection = application.config.dbConnection();
    let agendamento_mercadoriaModel = new application.app.model.AgendamentoMercadoria.agendamento_mercadoriaDAO(connection);
    let codigoTransportadora = agendamento_mercadoriaModel.retorneoCodigoDaTransportadora(agendamento_mercadoria);
    agendamento_mercadoriaModel.insiraInformacoesDaTransportadora(agendamento_mercadoria, codigoTransportadora)
    agendamento_mercadoriaModel.agendamento_mercadoria_salvar(agendamento_mercadoria, codigoTransportadora);
    let idAgendamento = agendamento_mercadoriaModel.retorneoOUltimoAgendamentoSalvo()
    agendamento_mercadoriaModel.insiraHorarioAgendamento(agendamento_mercadoria, idAgendamento);

    let idFornecedor = agendamento_mercadoriaModel.retorneoCodigoDoFornecedor(agendamento_mercadoria)
    agendamento_mercadoriaModel.insiraInformacoesMercadoria(agendamento_mercadoria, idFornecedor, idAgendamento)


    var fornecedorModel = new application.app.model.Fornecedor.fornecedorDAO(connection);
    var transportadoraModel = new application.app.model.Transportadora.transportadoraDAO(connection);
   
    var infoTransportadora = transportadoraModel.transportadora_recuperar_informacoes();
    var infoFornecedor = fornecedorModel.fornecedor_recuperar_informacoes();
    let listaDeAgendamentos = agendamento_mercadoriaModel.retorneOsAgendamentosCriados();

    res.render("AgendamentoMercadoria/agendamento", {transportadora : infoTransportadora, fornecedor : infoFornecedor, agendamento : listaDeAgendamentos} );
}
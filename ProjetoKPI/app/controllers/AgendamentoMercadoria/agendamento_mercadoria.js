module.exports.agendamento_mercadoria_carregar_informacoes = function (application, req, res) {

    var connection = application.config.dbConnection();
    var fornecedorModel = new application.app.model.Fornecedor.fornecedorDAO(connection);
    var transportadoraModel = new application.app.model.Transportadora.transportadoraDAO(connection);
   
    var infoTransportadora = transportadoraModel.transportadora_recuperar_informacoes();
    var infoFornecedor = fornecedorModel.fornecedor_recuperar_informacoes();
    res.render("AgendamentoMercadoria/agendamento", {transportadora : infoTransportadora, fornecedor : infoFornecedor} );
}
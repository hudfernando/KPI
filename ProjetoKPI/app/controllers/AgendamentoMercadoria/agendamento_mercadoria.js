
module.exports.agendamento_mercadoria_carregar_informacoes = function (application, req, res) {

    var connection = application.config.dbConnection();
    var fornecedorModel = new application.app.model.Fornecedor.fornecedorDAO(connection);
    var transportadoraModel = new application.app.model.Transportadora.transportadoraDAO(connection);
    let agendamento_mercadoriaModel = new application.app.model.AgendamentoMercadoria.agendamento_mercadoriaDAO(connection);
   
    var infoTransportadora = transportadoraModel.transportadora_recuperar_informacoes();
    var infoFornecedor = fornecedorModel.fornecedor_recuperar_informacoes();
    let listaDeAgendamentos = agendamento_mercadoriaModel.retorneOsAgendamentosCriados();
    listaDeAgendamentos.forEach(function(listaDeAgendamentos){
        listaDeAgendamentos.DIA_AGENDAMENTO = formateAData(listaDeAgendamentos.DIA_AGENDAMENTO.substring(0, 10));
    });




    res.render("AgendamentoMercadoria/agendamento", {transportadora : infoTransportadora, fornecedor : infoFornecedor, agendamento : listaDeAgendamentos} );

    function formateAData(data){
        var dataSemOtraco =  data.split('-');
        var dataFormatada = dataSemOtraco[2].substring(0, 2) + '-';
        dataFormatada += dataSemOtraco[1].substring(0, 2) ;
        return dataFormatada;
      }
}
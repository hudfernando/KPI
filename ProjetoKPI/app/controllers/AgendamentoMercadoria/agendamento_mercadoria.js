
module.exports.agendamento_mercadoria_carregar_informacoes = function (application, req, res) {

    var connection = application.config.dbConnection();
    var fornecedorModel = new application.app.model.Fornecedor.fornecedorDAO(connection);
    var transportadoraModel = new application.app.model.Transportadora.transportadoraDAO(connection);
    let agendamento_mercadoriaModel = new application.app.model.AgendamentoMercadoria.agendamento_mercadoriaDAO(connection);
   
    var infoTransportadora = transportadoraModel.transportadora_recuperar_informacoes();
    var infoFornecedor = fornecedorModel.fornecedor_recuperar_informacoes();
    let ultimoAgendamentoCriado = agendamento_mercadoriaModel.retorneUltimoAgendamentoCriado();
    ultimoAgendamentoCriado[0].DIA_AGENDAMENTO = formateAData(ultimoAgendamentoCriado[0].DIA_AGENDAMENTO);
    
    function formateAData(data){
        var dataSemOtraco =  data.split('-');
        var dataFormatada = dataSemOtraco[2].substring(0, 2) + '-';
        dataFormatada += dataSemOtraco[1].substring(0, 2) ;
        return dataFormatada;
      }

    res.render("AgendamentoMercadoria/agendamento", {transportadora : infoTransportadora, fornecedor : infoFornecedor, agendamento : ultimoAgendamentoCriado} );

    
}
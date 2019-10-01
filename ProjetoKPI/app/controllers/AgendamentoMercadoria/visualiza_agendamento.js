module.exports.selecionar_agendamentos = function (application, req, res) {

    let connection = application.config.dbConnection();
    let agendamento_mercadoriaModel = new application.app.model.AgendamentoMercadoria.agendamento_mercadoriaDAO(connection);
    let listaDeAgendamentos = agendamento_mercadoriaModel.retorneOsAgendamentosCriados();

    listaDeAgendamentos.forEach(function (listaDeAgendamentos) {
        listaDeAgendamentos.DIA_AGENDAMENTO = formateAData(listaDeAgendamentos.DIA_AGENDAMENTO.substring(0, 10));
    });

    function formateAData(data) {
        var dataSemOtraco = data.split('-');
        var dataFormatada = dataSemOtraco[2].substring(0, 2) + '-';
        dataFormatada += dataSemOtraco[1].substring(0, 2);
        return dataFormatada;
    }

    res.render("AgendamentoMercadoria/visualizaAgendamento", {agendamento: listaDeAgendamentos });
}
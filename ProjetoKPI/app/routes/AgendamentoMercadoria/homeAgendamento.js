module.exports = function (application) {
    application.get('/cadastrar_fornecedor', function (req, res) {
        res.render('Fornecedor/cadastroFornecedor');
    });

    application.get('/cadastrar_transportadora', function (req, res) {
        res.render('Transportadora/cadastroTransportadora');
    });

    application.get('/gerar_agendamento', function (req, res) {
        application.app.controllers.AgendamentoMercadoria.agendamento_mercadoria.agendamento_mercadoria_carregar_informacoes(application, req, res);
    });

    application.get('/consultar_agendamento', function (req, res) {
        application.app.controllers.AgendamentoMercadoria.visualiza_agendamento.selecionar_agendamentos(application, req, res);
    });
}

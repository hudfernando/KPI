module.exports = function (application) {
    application.get('/edita_agendamento', function (req, res) {
        application.app.controllers.AgendamentoMercadoria.visualiza_agendamento.edita_agendamentos(application, req, res);
    });
}
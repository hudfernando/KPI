module.exports = function (application) {
    application.post('/agendar', function (req, res) {
        application.app.controllers.AgendamentoMercadoria.agendamento.agendar(application, req, res);
    });
}
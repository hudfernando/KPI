module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.home.index(application, req, res);
    });

    application.get('/producao', function (req, res) {
        res.render('producao');
    });

    application.get('/estoque', function (req, res) {
        res.render('estoque');
    });

    application.get('/rms', function (req, res) {
        res.render('rms');
    });

    application.get('/expedicao', function (req, res) {
        res.render('expedicao');
    });

    application.get('/informacoes_mensais', function (req, res) {
        res.render('informacoesMensais');
    });

    application.get('/agendamento', function (req, res) {
        res.render('AgendamentoMercadoria/homeAgendamento');
    });

    application.get('/pedido', function (req, res) {
        res.render('ControleAtacado/home');
    });

}


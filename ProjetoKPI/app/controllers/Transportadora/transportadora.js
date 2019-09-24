module.exports.transportadora_salvar = function (application, req, res) {

    var transportadora = req.body;
    var connection = application.config.dbConnection();
    var transportadoraModel = new application.app.model.Transportadora.transportadoraDAO(connection);

    transportadoraModel.transportadora_salvar(transportadora);

    res.redirect('/');
}
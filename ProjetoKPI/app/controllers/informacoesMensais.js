

module.exports.informacoes_mensais_salvar = function (application, req, res) {

    var informacoesMensais = req.body;
    var connection = application.config.dbConnection();
    var informacoesMensaisModel = new application.app.model.informacoesMensaisDAO(connection);


    informacoesMensaisModel.informacoes_mensais_salvar(informacoesMensais);

    
    res.redirect('/');
}
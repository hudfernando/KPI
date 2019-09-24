module.exports.estoque_salvar = function (application, req, res) {

    var estoque = req.body;
    var connection = application.config.dbConnection();
    var estoqueModel = new application.app.model.estoqueDAO(connection);

    estoqueModel.estoque_salvar(estoque);

    res.redirect('/');


}
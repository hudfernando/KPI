module.exports.fornecedor_salvar = function (application, req, res) {

    var fornecedor = req.body;
    var connection = application.config.dbConnection();
    var fornecedorModel = new application.app.model.Fornecedor.fornecedorDAO(connection);

    fornecedorModel.fornecedor_salvar(fornecedor);

    res.redirect('/');


}
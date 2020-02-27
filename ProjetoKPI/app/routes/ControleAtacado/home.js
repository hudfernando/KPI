module.exports = function (application) {

    application.get('/inserir_pedido', function (req, res) {
        res.render('ControleAtacado/inserir_pedido');
    });

    application.get('/consulta_pedido', function (req, res) {
        res.render('ControleAtacado/consulta');
    });
}
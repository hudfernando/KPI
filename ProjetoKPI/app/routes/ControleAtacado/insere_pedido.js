module.exports = function(application){
	application.post('/inserir_pedido', function(req, res){
		application.app.controllers.pedido.pedido_salvar(application, req, res);
	});
}
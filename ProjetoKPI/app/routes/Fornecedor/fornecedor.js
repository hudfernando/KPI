module.exports = function(application){
	application.post('/fornecedor_salvar', function(req, res){
		application.app.controllers.Fornecedor.fornecedor.fornecedor_salvar(application, req, res);
	});
}
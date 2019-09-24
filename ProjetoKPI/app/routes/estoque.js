module.exports = function(application){
	application.post('/estoque_salvar', function(req, res){
		application.app.controllers.estoque.estoque_salvar(application, req, res);
	});
}
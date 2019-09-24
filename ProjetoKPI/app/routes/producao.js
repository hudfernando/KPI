module.exports = function(application){
	application.post('/producao_salvar', function(req, res){
		application.app.controllers.producao.producao_salvar(application, req, res);
	});
}
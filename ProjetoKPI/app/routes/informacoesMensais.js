module.exports = function(application){
	application.post('/informacoes_mensais_salvar', function(req, res){
		application.app.controllers.informacoesMensais.informacoes_mensais_salvar(application, req, res);
	});
}
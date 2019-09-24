module.exports = function(application){
	application.get('/consulta', function(req, res){
		application.app.controllers.informacoes_consolidadas.informacoes_consolidadas_consultar(application, req, res);
	});
}
module.exports = function(application){
	application.post('/expedicao_salvar', function(req, res){
		application.app.controllers.expedicao.expedicao_salvar(application, req, res);
	});
}
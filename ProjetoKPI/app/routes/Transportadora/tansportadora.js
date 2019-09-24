module.exports = function(application){
	application.post('/transportadora_salvar', function(req, res){
		application.app.controllers.Transportadora.transportadora.transportadora_salvar(application, req, res);
	});
}
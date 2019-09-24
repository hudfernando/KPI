module.exports = function(application){
	application.get('/envio', function(req, res){
		application.app.controllers.envio_de_informacoes.recuperar(application, req, res);
	});
}


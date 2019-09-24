module.exports = function(application){
	application.post('/rms_salvar', function(req, res){
		application.app.controllers.rms.rms_salvar(application, req, res);
	});
}
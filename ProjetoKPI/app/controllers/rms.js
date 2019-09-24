var moment = require('moment');

module.exports.rms_salvar = function (application, req, res) {

    var rms = req.body;
    var connection = application.config.dbConnection();
    var rmsModel = new application.app.model.rmsDAO(connection);


    rmsModel.rms_salvar(rms);

    res.redirect('/');
}
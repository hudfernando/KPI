// const TelegramBot = require('node-telegram-bot-api')
var moment = require('moment');
// const Token = '746978387:AAFutxXHcIf0GPvlcZyV9UYtb-uIiJr4plM';
// const bot = new TelegramBot(Token, { polling: true })
// const chat_id = '-330824701';
const sinalDeNegativo = "\u{1F615}\n"
const sinalDeBom = "\u{1F610}\n";
const sinalDeOtimo = "\u{1F600}\n"

module.exports.producao = function (application, req, res) {
    res.render("producao", { validacao: {} });

}

module.exports.producao_salvar = function (application, req, res) {

    var producao = req.body;
    var connection = application.config.dbConnection();
    var producaoModel = new application.app.model.producaoDAO(connection);

    producaoModel.producao_salvar(producao);

    res.redirect('/');


}
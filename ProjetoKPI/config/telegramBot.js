const TelegramBot = require('node-telegram-bot-api')
const Token = '746978387:AAFutxXHcIf0GPvlcZyV9UYtb-uIiJr4plM';


var bot = function () {
    return new TelegramBot(Token, { polling: true })
}


module.exports = function () {
    return bot;
}



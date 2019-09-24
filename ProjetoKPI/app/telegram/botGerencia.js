function botGerencia(bot) {
    this._bot = bot;
}

const chat_id = '-1001463627848';

botGerencia.prototype.enviarMensagem = function (mensagem) {
    this._bot.sendMessage(chat_id, mensagem);
}

module.exports = function () {
    return botGerencia;
}
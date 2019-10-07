const nodemailer = require('nodemailer');
module.exports.agendar = function (application, req, res) {

    let agendamento_mercadoria = req.body;

    let connection = application.config.dbConnection();
    let agendamento_mercadoriaModel = new application.app.model.AgendamentoMercadoria.agendamento_mercadoriaDAO(connection);
    let codigoTransportadora = agendamento_mercadoriaModel.retorneoCodigoDaTransportadora(agendamento_mercadoria);
    agendamento_mercadoriaModel.insiraInformacoesDaTransportadora(agendamento_mercadoria, codigoTransportadora)
    agendamento_mercadoriaModel.agendamento_mercadoria_salvar(agendamento_mercadoria, codigoTransportadora);
    let idAgendamento = agendamento_mercadoriaModel.retorneoOUltimoAgendamentoSalvo()
    agendamento_mercadoriaModel.insiraHorarioAgendamento(agendamento_mercadoria, idAgendamento);

    let idFornecedor = agendamento_mercadoriaModel.retorneoCodigoDoFornecedor(agendamento_mercadoria)
    agendamento_mercadoriaModel.insiraInformacoesMercadoria(agendamento_mercadoria, idFornecedor, idAgendamento)


    var fornecedorModel = new application.app.model.Fornecedor.fornecedorDAO(connection);
    var transportadoraModel = new application.app.model.Transportadora.transportadoraDAO(connection);

    var infoTransportadora = transportadoraModel.transportadora_recuperar_informacoes();
    var infoFornecedor = fornecedorModel.fornecedor_recuperar_informacoes();
    let listaDeAgendamentos = agendamento_mercadoriaModel.retorneOsAgendamentosCriados();

    listaDeAgendamentos.forEach(function (listaDeAgendamentos) {
        listaDeAgendamentos.DIA_AGENDAMENTO = formateAData(listaDeAgendamentos.DIA_AGENDAMENTO.substring(0, 10));
    });

    function formateAData(data) {
        var dataSemOtraco = data.split('-');
        var dataFormatada = dataSemOtraco[2].substring(0, 2) + '-';
        dataFormatada += dataSemOtraco[1].substring(0, 2);
        return dataFormatada;
    }
    

    // const transporter = nodemailer.createTransport({
    //     host: "webmail.goyazservice.com.br",
    //     port: 465,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: "integracao@goyazservice.com.br",
    //         pass: "csf1234"
    //     },
    //     tls: { rejectUnauthorized: false }
    // });

    // const mailOptions = {
    //     from: 'integracao@goyazservice.com.br',
    //     to: 'hudfernando@gmail.com',
    //     subject: 'E-mail enviado usando Node!',
    //     text: 'Bem fácil, não? ;)'
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email enviado: ' + info.response);
    //     }
    // });

    res.render("AgendamentoMercadoria/agendamento", { transportadora: infoTransportadora, fornecedor: infoFornecedor, agendamento: listaDeAgendamentos[listaDeAgendamentos.length - 1] });
}
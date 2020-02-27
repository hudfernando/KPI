let moment = require('moment');
const separador ='.....................................................\n';

exports.recuperar = function (application, req, res) {

    let connection = application.config.dbConnection();
    let informacoesSalvasModel = new application.app.model.envioDeInformacoesDAO(connection);
    let informacoesSalvas = informacoesSalvasModel.retorneAsInformacoesDoDia();
    console.log(informacoesSalvas)

    let mensagemDeEnvio = crieCabecalho();
    mensagemDeEnvio += retorneInformacoesDoProducaoFormatada(informacoesSalvas);
    mensagemDeEnvio += retorneInformacoesDoRMSFormatada(informacoesSalvas);
    mensagemDeEnvio += retorneInformacoesDoEstoqueFormatada(informacoesSalvas);
    mensagemDeEnvio += retorneInformacoesDaExpedicaoFormatada(informacoesSalvas);

    console.log(mensagemDeEnvio);

    let bot = application.config.telegramBot();
    let botGerencia = new application.app.telegram.botGerencia(bot);
    botGerencia.enviarMensagem(mensagemDeEnvio);
    res.redirect('/');

}



function crieCabecalho() {
    const agora = moment().subtract(1, "hours");
    monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    let cabecalho = 'Info do dia: ' + agora.date() + ' de ' + monName[agora.month()] + '\n';
    cabecalho += separador;
    return cabecalho;
}

function retorneInformacoesDoProducaoFormatada(informacoesSalvas) {
    let graficoProducao = "\u{1F4C8}";
    let mensagem;

    mensagem = graficoProducao + ' Produção ' + graficoProducao + '\n';
    mensagem += 'Total de Pedidos  => ' + formatarNumero(informacoesSalvas[0].TOTAL_DE_PEDIDOS) + '\n';
    mensagem += 'Total de Linhas   => ' + formatarNumero(informacoesSalvas[0].TOTAL_DE_LINHAS) + '\n';
    mensagem += 'Media Linhas Ped  => ' + informacoesSalvas[0].MEDIA_LINHAS_POR_PEDIDO + '\n';
    mensagem += 'Total de Unidades => ' + formatarNumero(informacoesSalvas[0].TOTAL_DE_UNIDADES) + '\n';
    mensagem += "\u{1F551} " + 'Final Producao => ' + informacoesSalvas[0].FINAL_PRODUCAO + '\n';
    mensagem += separador;
    return mensagem;
}

function retorneInformacoesDoRMSFormatada(informacoesSalvas) {
    let graficoRMS = "\u{1F4BB}";
    let cabecalhoRMS = graficoRMS + ' Rec Merc Serv ' + graficoRMS + '\n';
    let mensagem = '';
    mensagem = cabecalhoRMS;
    mensagem += 'Val Rec => ' + formateNumeroParaMoeda(informacoesSalvas[0].VALOR_RECEBIDO) + '\n';
    mensagem += 'Notas Efetivadas => ' + informacoesSalvas[0].NOTAS_EFETIVADAS + '\n';
    mensagem += 'Ressarc Ind => ' + formateNumeroParaMoeda(informacoesSalvas[0].RESSARCIMENTO_INDUSTRIA) + '\n';
    mensagem += separador;
    return mensagem;
}

function retorneInformacoesDoEstoqueFormatada(informacoesSalvas) {
    console.log(informacoesSalvas)
    monName = new Array("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez", "Jan")
    let graficoEstoque = "\u{1F4CA}";
    let mensagem = graficoEstoque + ' Estoque ' + graficoEstoque +'\n';
    mensagem += 'Prod Zerados => ' + formatarNumero(informacoesSalvas[0].TOTAL_DE_PRODUTOS_ZERADOS) + '\n';
    mensagem += 'Nível de Rupturas => ' + informacoesSalvas[0].NIVEL_DE_RUPTURAS + '%' + '\n';
    let valorMes = formateNumeroParaMoeda(informacoesSalvas[0].PERDAS_DO_MES);
    mensagem += 'Venc ' + retorneOMes() + ' => '  + valorMes + '\n';

    let valorMes_1 = formateNumeroParaMoeda(informacoesSalvas[0].PERDAS_DO_MES_1);
    mensagem += 'Venc ' + retorneOMes_1() + ' => '  + valorMes_1 + '\n';

    let valorMes_2 = formateNumeroParaMoeda(informacoesSalvas[0].PERDAS_DO_MES_2);
    mensagem += 'Venc ' + retorneOMes_2() + ' => '  + valorMes_2 + '\n';


    mensagem += separador;
    return mensagem;
}

function retorneInformacoesDaExpedicaoFormatada(informacoesSalvas) {
    let caminhao = "\u{1F69A}" + ' ' + "\u{1F69A}";
    let mensagem = caminhao + ' Transporte/Expedição\n';
    mensagem += 'Tot Vol Expedidos   => ' + formatarNumero(informacoesSalvas[0].TOTAL_DE_VOLUMES_EXPEDIDOS) + '\n';
    mensagem += 'Venda    => ' + formateNumeroParaMoeda(informacoesSalvas[0].VALOR_TOTAL_DA_VENDA) + '\n';
    mensagem += "\u{1F551} " + 'Termino Expd => ' + informacoesSalvas[0].FINAL_EXPEDICAO + '\n'
    mensagem += separador;
    return mensagem;
}



function retorneOMes(){
    let mesEcolhido;
    const agora = moment();
    monName = new Array("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez")
    let r = agora.format('YYYY-MM-DD')
    mesEcolhido = moment(r).add(2, "months").month();
    return monName[mesEcolhido];
      
}

function retorneOMes_1(){
    let mesEcolhido;
    const agora = moment();
    monName = new Array("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez")
    let r = agora.format('YYYY-MM-DD')
    mesEcolhido = moment(r).add(3, "months").month();
    return monName[mesEcolhido];
      
}

function retorneOMes_2(){
    let mesEcolhido;
    const agora = moment();
    monName = new Array("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez")
    let r = agora.format('YYYY-MM-DD')
    mesEcolhido = moment(r).add(4, "months").month();
    return monName[mesEcolhido];
      
}
function formatarNumero(numero) {
    let n = numero.toString();
    let r = '';
    let x = 0;

    for (let i = n.length; i > 0; i--) {
        r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '');
        x = x == 2 ? 0 : x + 1;
    }

    return r.split('').reverse().join('');
}


function formateNumeroParaMoeda(numeros) {
    let numero = numeros.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}
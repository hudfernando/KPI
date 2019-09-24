var moment = require('moment');
const separador ='.....................................................\n';

exports.recuperar = function (application, req, res) {


    var connection = application.config.dbConnection();
    var estoqueModel = new application.app.model.estoqueDAO(connection);
    var expedicaoModel = new application.app.model.expedicaoDAO(connection);
    var producaoModel = new application.app.model.producaoDAO(connection);
    var rmsModel = new application.app.model.rmsDAO(connection);
    var informacoesMensaisModel = new application.app.model.informacoesMensaisDAO(connection);



    const now = moment();
    var data = now.format('YYYY-MM-DD');
    var estoque = estoqueModel.recuperar(data);
    
    var informacoesMensais = informacoesMensaisModel.recuperar();
    
    var niveldeRupturaCalculado = calculeONiveldeRuptura(informacoesMensais, estoque);
    var retorno = estoqueModel.salvar_nivel_de_ruptura(niveldeRupturaCalculado, data);
    if (retorno === 0) {
        res.send('nao foi possivel salvar o nivel de ruptura');
        return;
    }

    var producao = producaoModel.recuperar(data); 
    var rms = rmsModel.recuperar(data);
    var expedicao = expedicaoModel.recuperar(data);
    

    var mensagemDeEnvio = crieCabecalho();
    mensagemDeEnvio += retorneInformacoesDoProducaoFormatada(producao);
    mensagemDeEnvio += retorneInformacoesDoRMSFormatada(rms);
    mensagemDeEnvio += retorneInformacoesDoEstoqueFormatada(estoque, niveldeRupturaCalculado, data);
    mensagemDeEnvio += retorneInformacoesDaExpedicaoFormatada(expedicao);

    var bot = application.config.telegramBot();
    var botGerencia = new application.app.telegram.botGerencia(bot);
    botGerencia.enviarMensagem(mensagemDeEnvio);

    res.redirect('/');

}



function crieCabecalho() {
    const agora = moment();
    monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    var cabecalho = 'Info do dia: ' + agora.date() + ' de ' + monName[agora.month()] + '\n';
    cabecalho += separador;
    return cabecalho;
}
function retorneInformacoesDoRMSFormatada(rms) {
    var graficoRMS = "\u{1F4BB}";
    var cabecalhoRMS = graficoRMS + ' Rec Merc Serv ' + graficoRMS + '\n';
    var mensagem = '';
    mensagem = cabecalhoRMS;
    mensagem += 'Val Rec => ' + formateNumeroParaMoeda(rms[0].VALOR_RECEBIDO) + '\n';
    mensagem += 'Notas Efetivadas => ' + rms[0].NOTAS_EFETIVADAS + '\n';
    mensagem += 'Ressarc Ind => ' + formateNumeroParaMoeda(rms[0].RESSARCIMENTO_INDUSTRIA) + '\n';
    mensagem += separador;
    return mensagem;
}

function retorneInformacoesDaExpedicaoFormatada(expedicao) {
    var caminhao = "\u{1F69A}" + ' ' + "\u{1F69A}";
    var mensagem = caminhao + ' Transporte/Expedição\n';
    mensagem += 'Tot Vol Expedidos   => ' + formatarNumero(expedicao[0].TOTAL_DE_VOLUMES_EXPEDIDOS) + '\n';
    mensagem += 'Venda    => ' + formateNumeroParaMoeda(expedicao[0].VALOR_TOTAL_DA_VENDA) + '\n';
    mensagem += "\u{1F551} " + 'Termino Expd => ' + expedicao[0].FINAL_EXPEDICAO + '\n'
    mensagem += separador;
    return mensagem;
}

function retorneInformacoesDoEstoqueFormatada(estoque, valorDoNiveldeRuptura) {
    const agora = moment();
    monName = new Array("jan", "fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez")
    var graficoEstoque = "\u{1F4CA}";
    var mensagem = graficoEstoque + ' Estoque ' + graficoEstoque +'\n';
    mensagem += 'Prod Zerados => ' + formatarNumero(estoque[0].TOTAL_DE_PRODUTOS_ZERADOS) + '\n';
    mensagem += 'Nível de Rupturas => ' + valorDoNiveldeRuptura + '%' + '\n';
    var valor = formateNumeroParaMoeda(estoque[0].PERDAS_DO_MES);
    mensagem += 'Venc ' + monName[(agora.month()) + 2] + ' => '  + valor + '\n';
    mensagem += separador;
    return mensagem;
}

function retorneInformacoesDoProducaoFormatada(producao) {
    var graficoProducao = "\u{1F4C8}";
    var mensagem;

    mensagem = graficoProducao + ' Produção ' + graficoProducao + '\n';
    mensagem += 'Total de Pedidos  => ' + formatarNumero(producao[0].TOTAL_DE_PEDIDOS) + '\n';
    mensagem += 'Total de Linhas   => ' + formatarNumero(producao[0].TOTAL_DE_LINHAS) + '\n';
    mensagem += 'Media Linhas Ped  => ' + producao[0].MEDIA_LINHAS_POR_PEDIDO + '\n';
    mensagem += 'Total de Unidades => ' + formatarNumero(producao[0].TOTAL_DE_UNIDADES) + '\n';
    mensagem += "\u{1F551} " + 'Final Producao => ' + producao[0].FINAL_PRODUCAO + '\n';
    mensagem += separador;
    return mensagem;
}

function calculeONiveldeRuptura(informacoesMensais, estoque) {
    var produtosAtivos = informacoesMensais[0].ESTOQUE_TOTAL_PRODUTOS_ATIVOS;
    var produtosZerados = estoque[0].TOTAL_DE_PRODUTOS_ZERADOS;
    var produtosZeradosVezesCem = produtosZerados * 100;
    var totaldeRuptura = produtosZeradosVezesCem / produtosAtivos;
    return totaldeRuptura.toFixed(2);

}

function formatarNumero(n) {
    var n = n.toString();
    var r = '';
    var x = 0;

    for (var i = n.length; i > 0; i--) {
        r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '');
        x = x == 2 ? 0 : x + 1;
    }

    return r.split('').reverse().join('');
}


function formateNumeroParaMoeda(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}
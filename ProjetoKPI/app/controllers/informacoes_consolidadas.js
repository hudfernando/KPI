module.exports.informacoes_consolidadas_consultar = function (application, req, res) {

  var connection = application.config.dbConnection();
  var informacoesConsolidadasModel = new application.app.model.estoqueDAO(connection);

  var informacao = informacoesConsolidadasModel.consultar();
  informacao.forEach(function (informacao) {
    informacao.TOTAL_DE_PRODUTOS_ZERADOS = formatarNumero(informacao.TOTAL_DE_PRODUTOS_ZERADOS);
    informacao.DATA_INSERCAO = formateAData(informacao.DATA_INSERCAO);
    informacao.PERDAS_DO_MES = formateNumeroParaMoeda(informacao.PERDAS_DO_MES);
    if (informacao.PERDAS_DO_MES_1 != null) {
      informacao.PERDAS_DO_MES_1 = formateNumeroParaMoeda(informacao.PERDAS_DO_MES_1);
      informacao.PERDAS_DO_MES_2 = formateNumeroParaMoeda(informacao.PERDAS_DO_MES_2);
    }
  });

  res.render("informacoes_consolidadas", { estoque: informacao });


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

  function formateAData(data) {
    var dataSemOtraco = data.split('-');
    var dataFormatada = dataSemOtraco[2].substring(0, 2) + '-';
    dataFormatada += dataSemOtraco[1].substring(0, 2);
    return dataFormatada;
  }
  function formateNumeroParaMoeda(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
  }

}
function pedidoDAO(connection) {
    this._connection = connection;
}

pedidoDAO.prototype.rms_salvar = function (pedido) { 
    
    var sql = insert();
    var valores = '';
}

function insert(){
    return 'INSERT INTO ATACADO (ATACADO_PEDIDO, NOME_FANTASIA, STATUS_PEDIDO)'
}


module.exports = function () {
    return pedidoDAO;
}
function desconto(cliente){

    let valor = 100.00;

if (cliente === 'comum'){
    resultado = valor;

}else if (cliente==='vip') {
    resultado = valor - (valor * 0.05);

}else {
    resultado = valor -(valor * 0.1);

}

return resultado;

}
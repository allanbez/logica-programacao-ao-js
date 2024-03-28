function converteTemperatura(temperaturaAtual, escalaAtual, escalaConversao) {

    let temperaturaConvertida, msgErro = "ok";
    if (!isNaN(temperaturaAtual)) {

        if (escalaAtual === 'C') {

            if (escalaConversao === 'K') {
                temperaturaConvertida = temperaturaAtual + 273.15;

            } else if (escalaConversao === 'F') {
                temperaturaConvertida = (temperaturaAtual * 9 / 5) + 32;

            } else if (escalaConversao === 'C') {
                temperaturaConvertida = (`Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);

            } else {
                temperaturaConvertida = (`Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`);
            }

        } else if (escalaAtual === 'F') {

            if (escalaConversao === 'K') {
                temperaturaConvertida = (temperaturaAtual + 459.67) * 5 / 9


            } else if (escalaConversao === 'C') {
                temperaturaConvertida = (temperaturaAtual - 32) * 5 / 9;


            } else if (escalaConversao === 'F') {
                temperaturaConvertida = (`Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);

            } else {
                temperaturaConvertida = (`Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`);
            }

        } else if (escalaAtual === 'K') {

            if (escalaConversao === 'C') {
                temperaturaConvertida = temperaturaAtual - 273.15;

            } else if (escalaConversao === 'F') {
                temperaturaConvertida = temperaturaAtual * 9 / 5 - 459.67;

            } else if (escalaConversao === 'K') {
                temperaturaConvertida = (`Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);

            } else {
                msgErro = (`Erro: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`);
            }

        } else {
            msgErro = (`Erro: Escala selecionada: ${escalaAtual}. A escala ATUAL não existe ou não está disponível neste programa.`);

        }
    } else {
        msgErro = ' Erro: O número digitado para conversão não é um número válido.';
    }
    
    return {
        temperaturaAtual: temperaturaAtual,
        escalaAtual: escalaAtual,
        escalaConversao: escalaConversao,
        temperaturaConvertida: temperaturaConvertida,
        msgErro: msgErro
    };
}
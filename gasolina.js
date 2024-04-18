function descontogasolina(tipoCombustivel, qntdLitros){
    
    let = alcool = 2.89
    let = gasolina = 5.19

    if(tipoCombustivel === 'a'){

        if(qntdLitros <20) {
            resultado = alcool - (alcool * 0.03);
        }else {
            resultado = alcool -(alcool * 0.05);
        }   
    }else if (tipoCombustivel === 'g') {
        if (qntdLitros <20) {
            
        }else {

        }
    }

    return resultado
    }

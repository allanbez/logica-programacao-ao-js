let resultado

function tipotriangulo(ladoA,ladoB,ladoC){
    if (ladoA===ladoB===ladoC){
        return "equilátero";
    }else if (ladoA === ladoB || ladoA ===ladoC || ladoB===ladoC){
        
            return "isósceles";

        }else{
            return "escaleno";
        }
}




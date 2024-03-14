# logica-programacao-js
treinand a lógica de programação com o javascript

## operadores-arítimeticos.js
~~~js
const numero1 =40;
const numero2 =20;
~~~
a palavra `const`e ultilizada para a declaraçao de variaveis que nao vao ser retribuidas ( nao permite retribuiçao)

aqui declaramos  duas constantes que serao calculadas no bloco a seguir.
~~~js
console.log(`os numeros das operaçoes sao ${numero1} e ${numero2}`)
console.log(`a soma dos números é ${numero1+numero2}`);
console.log(`a subtração dos números é ${numero1+numero2}`);
console.log(`a multiplicação dos números é ${numero1+numero2}`);
console.log(`a divisao dos números é ${numero1+numero2}`);
console.log(`o resto dos números é ${numero1+numero2}`);
~~~
em cada uma das operaçoes , temos um operador aritimedico;
* `+` -> soma
* `-`-> subtraçao
* `*` ->multiplicaçao 
## operadores-atribuição.js

~~~js
let numero =10;
~~~

declaramos a variavel `numero` usando a palavra `let` pois essa variavel será **reatribiida** ao longo do nosso código.

em seguida fizemos uma serie de reatribuiçoes usando os operadores de atribuiçao

~~~js
console.log (`o numero e inicialmente igual a  ${numero}`);
console.log(`apos reatribuir somando o numero 10: ${numero +=10}`);
console.log (`reatribuind e subtraindo 10 ${numero -=10}`);
console.log (`reatribuind e multiplicando 10 ${numero *=10}`);
console.log (`reatribuindo e dividindo 10 ${numero /=10}`);
console.log(`reatribuindo para o reto da divisao por 10: ${numero  %=10}`);
console.log (`incremetando o numero em 1: ${++numero}`)
console.log (`decremetando o numero em 1: ${--numero}`)
console.log (` o numero final e igual a ${numero}`);
~~~
operadores de atribuiçao:
*`+=`-> reatribuiçao com soma 
*`-=`-> reatribuiçao com subtração 
*`*=`-> reatribuiçao com multiplicação
*`/=`-> reatribuiçao divisao
*`%=`-> reatribuiçao com resto da divisao
* `++`-> atribuição com **incremento 1** (pode ser *pré* ou *pós* incrementação).EX `numero ++`(pós-incremento)ou `++ numero`(pré incremento)
* `--`-> atribuição com **decremento 1** (pode ser *pré* ou *pòs* decrementado). EX `numero--`(pós incremento) ou `-- numero` (pré incremento)

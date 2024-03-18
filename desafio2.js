const
  peso = window.prompt ('digite seu peso'),
  altura = window.prompt('digite sua altura'),
 media= peso /(altura **2);
 
if (media <= 18.5){
console.log (`abaixo do peso valor do imc ${media.toFixed(2)}`)
}
else if (media  <=24.9){
    window.alert(`peso normal valor do imc ${media.toFixed(2)}`)
}
else if (media <=29.9){
    window.alert (`sobrepeso valor do imc ${media.toFixed(2)}`)
}
else if (media <=34.9){
    window.alert(`obesidade grau 1 valor do imc ${media.toFixed(2)}`)
}
else if(media <= 39.9){
    window.alert (`obesidade grau 2 valor do imc ${media.toFixed(2)}`)
}
else {
    window.alert(`obesidade grau 3 valor do imc ${media.toFixed(2)}`)
}
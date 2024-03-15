const  peso = window.prompt ('digite seu peso')
const altura = window.prompt('digite sua altura')
const media= peso /(altura **2);
if (media <= 18,5){
console.log ('abaixo do peso')
}
else if (media  <=24,9){
    window.alert('peso normal')
}
else if (media <=29,9){
    window.alert ('sobrepeso')
}
else if (media <=34,9){
    window.alert('obesidade grau 1')
}
else if(media <= 39.9){
    window.alert ('obesidade grau 2')
}
else {
    window.alert('obesidade grau 3')
}